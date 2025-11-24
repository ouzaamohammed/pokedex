import { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error("You must provide a pokemon name");
  }

  const pokemonName = args[0];

  const pokemon = state.caughtPokemon[pokemonName];
  if (!pokemon) {
    throw new Error("you have not caught that pokemon");
  }

  console.log(`Name: ${pokemon.name}`);
  console.log(`Height: ${pokemon.height}`);
  console.log(`Weight: ${pokemon.weight}`);
  console.log("Stats:");
  for (const statObj of pokemon.stats) {
    console.log(`  -${statObj.stat.name}: ${statObj.base_stat}`);
  }
  console.log("Types:");
  for (const typeObj of pokemon.types) {
    console.log(`  - ${typeObj.type.name}`);
  }
}
