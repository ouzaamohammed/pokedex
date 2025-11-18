import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";

export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");
}

export function startREPL() {
  const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: "Pokedex > ",
  });

  rl.prompt();
  rl.on("line", (input) => {
    const words = cleanInput(input);
    if (!input) {
      rl.prompt();
      return;
    }

    console.log(`Your command was: ${words[0]}`);
    rl.prompt();
  });
}
