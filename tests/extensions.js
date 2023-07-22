const path = require("path");
const fs = require("fs");
const test = require("ava").default;

const htmlFilePath = path.join(__dirname, "..", "dist", "extension/index.html");
const htmlData = fs.readFileSync(htmlFilePath, "utf8");

test("'shout' block extension processed content", async (t) => {
  const contentRegex = /THIS TEXT SHOULD BE IN UPPER CASE/m;
  const res = contentRegex.exec(htmlData);

  t.truthy(res);
});
