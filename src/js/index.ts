import { encode, decode } from "gpt-3-encoder";

document.querySelector("#encode").addEventListener("click", () => {
  const input = (document.querySelector("#plaintext") as HTMLInputElement)
    .value;
  const output = document.querySelector("#tokenized") as HTMLInputElement;
  output.value = JSON.stringify(encode(input));
});

document.querySelector("#decode").addEventListener("click", () => {
  const input = (document.querySelector("#tokenized") as HTMLInputElement)
    .value;
  const output = document.querySelector("#plaintext") as HTMLInputElement;
  output.value = decode(JSON.parse(input));
});
