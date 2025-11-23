import { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error("You must provide a location name");
  }

  const locationName = args[0];
  const location = await state.pokeapi.fetchLocation(locationName);

  console.log(`Exploring ${locationName}...`);
  console.log("Found Pokemon:");
  for (const pokemonEncounters of location.pokemon_encounters) {
    console.log(` - ${pokemonEncounters.pokemon.name}`);
  }
}
