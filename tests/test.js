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

test("Has code transformed for syntax highlighting", async (t) => {
  const regex =
    /<pre class="language-ruby"><code class="language-ruby">puts <span class="token string-literal"><span class="token string">"Hello, World!"<\/span><\/span><\/code><\/pre>/m;

  t.truthy(data.match(regex));
});
