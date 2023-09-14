"use client";

import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { PokemonCard } from "./PokemonCard";

interface PokemonGridProps {
  pokemonList: any
}

export const PokemonGrid = ({ pokemonList }: PokemonGridProps) => {
  const [searchText, setSearchText] = useState("");

  const searchFilter = (pokemonList: any) => {
    return pokemonList.filter(
      (pokemon: any) => pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    )
  }

  const filteredPokemonList = searchFilter(pokemonList)
  console.log(filteredPokemonList);

  return (
    <>
      <div>
        <h3 className="py-6 text-2xl text-center">Search For Pokemon</h3>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="pokemonName">Pokemon Name</Label>
          <Input type="text" value={searchText} id="pokemonName" placeholder="Pikachu etc." onChange={(e) => setSearchText(e.target.value)} />
        </div>
        <h3 className="pt-12 pb-6 text-3xl text-center ">PokemonCollection</h3>
      </div>
      <div className="grid mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        {filteredPokemonList.map((pokemon: any) => {
          return (
            <PokemonCard name={pokemon.name} key={`${pokemon.name} + card`} />
          )
        })}
      </div>
    </>
  );
};
