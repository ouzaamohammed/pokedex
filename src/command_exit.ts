import { State } from "./state.js";

export async function commadExit(state: State) {
  console.log("Closing the Pokedex... Goodbye!");
  state.rl.close();
  process.exit(0);
}
