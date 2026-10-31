import { test } from "node:test";
import assert from "node:assert/strict";
import { sources, claims } from "../src/site/sources.ts";
test("every external research claim resolves to a dated primary source", () => {
  const ids = new Set(sources.map((s) => s.id));
  assert.equal(ids.size, sources.length);
  for (const s of sources) {
    assert.equal(new URL(s.url).protocol, "https:");
    assert.ok(!Number.isNaN(Date.parse(s.checkedAt)));
    assert.ok(s.scope.trim());
  }
  for (const c of claims) {
    if (c.kind === "external") assert.ok(c.sourceIds.length > 0);
    for (const id of c.sourceIds) assert.ok(ids.has(id), id);
  }
});
