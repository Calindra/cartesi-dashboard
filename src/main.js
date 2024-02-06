// import { editor } from "monaco-editor";
import * as monaco from "monaco-editor";

async function main() {
  console.log("Hello World");

  const container = document.getElementById("container");
  const test = `function x() {
    console.log("Hello world!");
  }`;

  if (!container) {
    console.error("Container not found!");
    return;
  }

  monaco.editor.create(container, {
    value: test,
    language: "javascript",
  });
}

main();
