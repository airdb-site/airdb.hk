export interface Source {id:string;url:string;checkedAt:string;version:string;scope:string}
export interface Claim {id:string;kind:'external'|'internal'|'opinion'|'hypothesis';statement:string;sourceIds:string[]}
export const sources:Source[]=[{id:'x402-http-v2',url:'https://github.com/x402-foundation/x402/blob/main/specs/transports-v2/http.md',checkedAt:'2026-11-01',version:'HTTP transport v2; main (mutable), checked on stated date',scope:'HTTP 402 and the three payment headers; not evidence of AirDB integration, asset support, licensing or channel availability.'}];
export const claims:Claim[]=[
 {id:'http-negotiation',kind:'external',statement:'HTTP transport v2 uses 402 and PAYMENT-REQUIRED, PAYMENT-SIGNATURE and PAYMENT-RESPONSE for payment signaling, payload and settlement response.',sourceIds:['x402-http-v2']},
 {id:'agent-direction',kind:'opinion',statement:'Agent commerce may require shared infrastructure for intent, authority and results.',sourceIds:[]},
 {id:'workflow-efficiency',kind:'hypothesis',statement:'AI assistance may reduce selected workflow effort; benefit requires measurement.',sourceIds:[]},
 {id:'airdb-stage',kind:'internal',statement:'The website presents research and plans, not live financial services.',sourceIds:[]}
];
