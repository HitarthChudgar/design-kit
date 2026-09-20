import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const cli = join(root, 'bin', 'cli.js');
const { version } = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));

function run(cwd) {
  const result = spawnSync(process.execPath, [cli], { cwd, encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  return result.stdout;
}

function withTemp(fn) {
  const dir = mkdtempSync(join(tmpdir(), 'design-kit-'));
  try {
    fn(dir);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

withTemp((dir) => {
  mkdirSync(join(dir, '.design-kit'));
  writeFileSync(join(dir, '.design-kit', 'manifest.json'), '{"version":"1.0.1"}\n');

  const upgrade = run(dir);
  assert.match(upgrade, /What's new since 1\.0\.1/);
  assert.match(upgrade, /toast guidance/);
  assert.match(upgrade, new RegExp(`v${version} installed \\(was 1\\.0\\.1\\)`));

  const again = run(dir);
  assert.doesNotMatch(again, /What's new/);
  assert.match(again, new RegExp(`v${version} installed\\n`));
});

withTemp((dir) => {
  const fresh = run(dir);
  assert.doesNotMatch(fresh, /What's new/);
  assert.match(fresh, new RegExp(`v${version} installed\\n`));
  assert.ok(existsSync(join(dir, '.github', 'skills', 'prototype', 'SKILL.md')));
  assert.ok(existsSync(join(dir, '.github', 'skills', 'copy', 'SKILL.md')));
});

console.log('ok');
