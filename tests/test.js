const path = require("path");
const fs = require("fs");
const test = require("ava").default;

const filePath = path.resolve(__dirname, "../dist/index.html");
const data = fs.readFileSync(filePath, "utf8");

test("Has <title> populated", async (t) => {
  const titleRegex = /<title>(?<title>.+)<\/title>/m;
  const res = titleRegex.exec(data);

  const title = res?.groups?.["title"];

  t.truthy(res);
  t.is(title, "Introduction to AsciiDoc");
});

test("Has content populated", async (t) => {
  const regex = /<p>A preface about/m;

  t.truthy(data.match(regex));
});
