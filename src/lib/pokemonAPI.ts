const POKEMON_API = "https://pokeapi.co/api/v2/";

export const getPokemonList = async () => {
  const response = await fetch(POKEMON_API + "pokemon?limit=500&offset=0");
  const data = await response.json();
  return data.results;
};

export const getPokemon = async (name: string) => {
  const response = await fetch(POKEMON_API + "pokemon/" + name);
  const data = await response.json();
  return data;
};
