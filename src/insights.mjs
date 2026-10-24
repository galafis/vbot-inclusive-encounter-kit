import { analyze } from './engine.mjs';
const available = {
  invited: ['accept', 'decline'],
  active: ['pause', 'record_grant', 'record_revoke', 'withdraw', 'finish'],
  paused: ['resume', 'withdraw', 'finish'],
  ended: [],
};
export function study(s) {
  const analysis = analyze(s);
  const windows = [];
  let start = null;
  for (const row of analysis.journal) {
    if (row.recording && start === null) start = row.sequence;
    if (!row.recording && start !== null) {
      windows.push({ from_sequence: start, to_sequence: row.sequence - 1 });
      start = null;
    }
  }
  if (start !== null) windows.push({ from_sequence: start, to_sequence: analysis.journal.length });
  const recording_steps = analysis.journal.filter((r) => r.recording).length;
  return {
    analysis,
    available_actions: available[analysis.state],
    recording_windows: windows,
    recording_steps,
    pause_count: analysis.journal.filter((r) => r.type === 'pause' && r.accepted).length,
    closed: analysis.state === 'ended',
    notice: 'Sequence counts are not duration or device-state measurements.',
  };
}
