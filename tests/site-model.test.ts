import {test} from 'node:test';
import assert from 'node:assert/strict';
import {allPages,routeFor,capabilityStates} from '../src/site/model.ts';
import {copy,validateCopy} from '../src/site/index.ts';
test('language navigation preserves deep topics and generates unique canonical paths',()=>{
 assert.equal(routeFor('zh-hant','article'),'/zh-hant/research/ai-cross-border-payments/');
 assert.equal(routeFor('en','home'),'/');
 assert.equal(allPages().length,24); assert.equal(new Set(allPages().map(p=>p.path)).size,24);
});
test('capabilities cannot advertise unbuilt services as available',()=>{
 assert.deepEqual(capabilityStates,{orchestration:'planned',authorization:'planned',reconciliation:'planned',agent:'exploring'});
});
test('complete translations pass validation',()=>assert.doesNotThrow(()=>validateCopy(copy)));
test('missing localized page prevents publication',()=>{const v=structuredClone(copy); delete (v['zh-hant'].pages as any).trust; assert.throws(()=>validateCopy(v),/trust/);});
test('empty development notice prevents publication',()=>{const v=structuredClone(copy);v.en.ui.notice='';assert.throws(()=>validateCopy(v),/notice/);});
