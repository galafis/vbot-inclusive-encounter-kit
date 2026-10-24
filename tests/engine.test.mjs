import test from 'node:test';import assert from 'node:assert/strict';
import {analyze} from '../src/engine.mjs';
const run=events=>analyze({version:1,events:events.map(type=>({type}))});
test('recording requires active participation and an independent grant',()=>{const r=run(['record_grant','accept']);assert.equal(r.recording,false);assert.equal(r.rejections.length,1);});
test('pause removes recording and resume never restores it',()=>{const r=run(['accept','record_grant','pause','resume']);assert.equal(r.state,'active');assert.equal(r.recording,false);assert.equal(r.journal[1].recording,true);});
test('withdrawal is final and cannot be overridden by later acceptance',()=>{const r=run(['accept','withdraw','accept','record_grant']);assert.equal(r.state,'ended');assert.equal(r.recording,false);assert.equal(r.rejections.length,2);});
test('decline ends before any interaction',()=>{assert.equal(run(['decline','resume']).state,'ended');});
test('public journal never copies free text, identifiers or coordinates',()=>{const r=analyze({version:1,events:[{type:'accept',name:'SECRET',note:'PRIVATE',latitude:-25.4},{type:'pause',recording:true}]});const j=JSON.stringify(r);assert(!j.includes('SECRET'));assert(!j.includes('PRIVATE'));assert(!j.includes('latitude'));assert.equal(r.recording,false);});
test('invalid event is refused',()=>{assert.throws(()=>run(['teleport']));});
