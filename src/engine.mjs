import { array, object, version } from './contract.mjs';
const types = [
  'accept',
  'decline',
  'pause',
  'resume',
  'withdraw',
  'record_grant',
  'record_revoke',
  'finish',
];
export function analyze(s) {
  version(s);
  const events = array(s.events, 'events', 1000);
  let state = 'invited',
    recording = false;
  const journal = [],
    rejections = [];
  events.forEach((e, i) => {
    object(e, 'event');
    if (!types.includes(e.type)) throw new Error('Unknown event type');
    let next = state,
      accepted = true;
    switch (e.type) {
      case 'accept':
        if (state === 'invited') next = 'active';
        else accepted = false;
        break;
      case 'decline':
        if (state === 'invited') next = 'ended';
        else accepted = false;
        break;
      case 'pause':
        if (state === 'active') next = 'paused';
        else accepted = false;
        break;
      case 'resume':
        if (state === 'paused') next = 'active';
        else accepted = false;
        break;
      case 'withdraw':
      case 'finish':
        if (state === 'active' || state === 'paused') next = 'ended';
        else accepted = false;
        break;
      case 'record_grant':
        if (state === 'active') recording = true;
        else accepted = false;
        break;
      case 'record_revoke':
        recording = false;
        break;
    }
    if (accepted) state = next;
    if (state !== 'active') recording = false;
    if (!accepted)
      rejections.push({ sequence: i + 1, type: e.type, reason: 'invalid_for_state', state });
    // Deliberately whitelist. Do not spread input events into a public journal.
    journal.push({ sequence: i + 1, type: e.type, accepted, state, recording });
  });
  return {
    mode: 'facilitator_workflow_replay',
    state,
    recording,
    journal,
    rejections,
    operator_checklist: [
      'Verify native motion state separately',
      'Verify native camera/microphone state separately',
      'Do not infer device compliance from this journal',
    ],
    participant_score: null,
  };
}
