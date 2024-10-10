import { equal } from "assert/strict";
import { test } from "node:test";
import { JSDOM } from "jsdom";

test("select paragraph and access textContent", () => {
  const dom = new JSDOM(`<!DOCTYPE html><p>Hi!</p>`);

  equal(dom.window.document.querySelector("p")!.textContent, "Hi!");
});
