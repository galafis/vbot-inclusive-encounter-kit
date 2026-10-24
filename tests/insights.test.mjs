import test from 'node:test';
import assert from 'node:assert/strict';
import { study } from '../src/insights.mjs';
const run = (events) => study({ version: 1, events: events.map((type) => ({ type })) });
test('recording windows are sequence ranges, not seconds', () => {
  const r = run(['accept', 'record_grant', 'pause', 'resume']);
  assert.deepEqual(r.recording_windows, [{ from_sequence: 2, to_sequence: 2 }]);
  assert.equal(r.recording_steps, 1);
  assert.equal(r.pause_count, 1);
});
test('ended workflow exposes no available actions', () => {
  assert.deepEqual(run(['decline']).available_actions, []);
  assert.equal(run(['accept', 'withdraw']).closed, true);
});
test('empty encounter begins invited with acceptance optional', () => {
  const r = run([]);
  assert.deepEqual(r.available_actions, ['accept', 'decline']);
  assert.equal(r.recording_steps, 0);
});
