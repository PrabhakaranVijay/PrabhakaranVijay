import fs from "fs";

const wrapper = fs.readFileSync("./assets/snake-wrapper.svg", "utf8");
const snake = fs.readFileSync("./dist/snake.svg", "utf8");

// extract inner <svg> content only
const inner = snake
  .replace(/^[\s\S]*?<svg[^>]*>/, "")
  .replace(/<\/svg>[\s\S]*$/, "");

const result = wrapper.replace(
  '<g id="snake" transform="translate(20,95)">',
  `<g id="snake" transform="translate(20,95)">\n${inner}`
);

fs.writeFileSync("./dist/final.svg", result);
