import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import test from "ava";
import { glob } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htmlFilePath = path.join(__dirname, "..", "dist", "extension/index.html");
const htmlData = fs.readFileSync(htmlFilePath, "utf8");

test("'shout' block extension processed content", async (t) => {
  const contentRegex = /THIS TEXT SHOULD BE IN UPPER CASE/m;
  const res = contentRegex.exec(htmlData);

  t.truthy(res);
});

test("'kroki' block extension should fetch a svg", async (t) => {
  const dir = path.join(__dirname, "..", "dist", "mermaid/");
  const files = await Array.fromAsync(glob("*.svg", { cwd: dir }));
  t.assert(files.length > 0);
});
