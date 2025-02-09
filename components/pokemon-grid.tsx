/* eslint-disable react/jsx-key */
"use client"
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";
import { PokemonCard } from "@/components/pokemon-card";


interface PokemonGridProps {
  pokemonList: string[];
}

export function PokemonGrid({pokemonList} : PokemonGridProps) {
  const [searchText, setSearchText] = useState("");
  const searchFilter = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) => pokemon.name.toLowerCase().includes(searchText.toLowerCase()));
  }

  const filteredPokemonList = searchFilter(pokemonList);

  return (
    <>
      <div>
        <h3 className="text-2xl py-6 text-center">Search for your Pokemon!</h3>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="pokemonName">Pokemon Name</Label>
          <Input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} id="pokemonName" placeholder="Charizard, Pikachu..." autoComplete="off"/>
          <h3 className="text-3xl pt-12 pb-6 text-center">Pokemon Collection</h3>
        </div>

        <div className="grid mb-32 text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
          {filteredPokemonList.map((pokemon: any) => {
            return (
              <PokemonCard name={pokemon.name} />
            )
          })}
        </div>
      </div>
    </>
  )
}