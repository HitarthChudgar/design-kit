#!/usr/bin/env node
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const packageRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const targetRoot = process.cwd();
const manifestPath = join(targetRoot, '.design-kit', 'manifest.json');

const { version } = JSON.parse(readFileSync(join(packageRoot, 'package.json'), 'utf8'));

// Every file Design Kit writes. Nothing outside this list is touched.
const managedFiles = [
  {
    label: 'design.md',
    from: join(packageRoot, 'guidance', 'design.md'),
    to: join(targetRoot, '.design-kit', 'design.md'),
  },
  {
    label: 'prototype',
    from: join(packageRoot, 'skills', 'prototype', 'SKILL.md'),
    to: join(targetRoot, '.claude', 'skills', 'prototype', 'SKILL.md'),
  },
  {
    label: 'copy',
    from: join(packageRoot, 'skills', 'copy', 'SKILL.md'),
    to: join(targetRoot, '.claude', 'skills', 'copy', 'SKILL.md'),
  },
];

// ponytail: x.y.z only — 1.1.0-beta compares wrong. upgrade: semver if we ship prereleases.
function compareVersions(a, b) {
  return a.localeCompare(b, undefined, { numeric: true });
}

function readInstalledVersion() {
  try {
    const installed = JSON.parse(readFileSync(manifestPath, 'utf8')).version;
    return typeof installed === 'string' ? installed : null;
  } catch {
    return null;
  }
}

// ponytail: only `## 1.2.3` headings; `## [1.2.3] - date` is skipped.
// upgrade: Keep a Changelog parser if we adopt that format.
function releasesSince(since) {
  let lines;
  try {
    lines = readFileSync(join(packageRoot, 'CHANGELOG.md'), 'utf8').split('\n');
  } catch {
    return [];
  }

  const releases = [];
  for (const line of lines) {
    const heading = line.match(/^##\s+(\d+\.\d+\.\d+)\s*$/);
    if (heading) {
      releases.push({ version: heading[1], notes: [] });
    } else if (releases.length && line.trim()) {
      releases[releases.length - 1].notes.push(line);
    }
  }

  return releases.filter(
    (release) =>
      compareVersions(release.version, since) > 0 &&
      compareVersions(release.version, version) <= 0,
  );
}

const previousVersion = readInstalledVersion();

console.log('\nDesign Kit\n');

try {
  for (const file of managedFiles) {
    mkdirSync(dirname(file.to), { recursive: true });
    copyFileSync(file.from, file.to);
    console.log(`✓ ${file.label}`);
  }

  writeFileSync(manifestPath, `${JSON.stringify({ version }, null, 2)}\n`);
} catch (error) {
  console.error(`\nInstall failed: ${error.message}\n`);
  process.exit(1);
}

if (previousVersion && compareVersions(version, previousVersion) > 0) {
  const releases = releasesSince(previousVersion);
  if (releases.length) {
    console.log(`\nWhat's new since ${previousVersion}`);
    for (const release of releases) {
      console.log(`\n  ${release.version}`);
      for (const note of release.notes) console.log(`  ${note}`);
    }
  }
  console.log(`\nv${version} installed (was ${previousVersion})\n`);
} else {
  console.log(`\nv${version} installed\n`);
}
