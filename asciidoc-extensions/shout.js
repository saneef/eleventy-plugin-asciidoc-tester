export function shout() {
  const self = this;
  self.named("shout");
  self.onContext("paragraph");
  self.process(function (parent, reader) {
    const lines = reader.getLines().map((l) => l.toUpperCase());
    return self.createBlock(parent, "paragraph", lines);
  });
}
