import { State } from "./state.js";

export async function commadExit(state: State) {
  console.log("Closing the Pokedex... Goodbye!");
  state.rl.close();
  state.pokeapi.closeCache();
  process.exit(0);
}
