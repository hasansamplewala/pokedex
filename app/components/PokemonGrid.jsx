'use client';

import Link from "next/link"
import PokemonDetailsCard from "./PokemonDetailsCard";
import { useSearchParams } from "next/navigation";

function PokemonGrid({ pokemonArrayWithDetails }) {

    const searchParams = useSearchParams()
    const typeFilterFromQuery = searchParams.get('typeFilter')
    const pokemonSearch = searchParams.get('pokemonSearch')

    // console.log('pokemonSearch', pokemonSearch)
    // console.log('typeFilterFromQuery', typeFilterFromQuery, typeof typeFilterFromQuery)

    const filteredPokemon = pokemonArrayWithDetails.filter((pokemon) => {
        if (typeFilterFromQuery) {
            return pokemon.types.some((type) => type.type.name === typeFilterFromQuery);
        }
        if (pokemonSearch) {
            return pokemon.name.includes(pokemonSearch);
        }
        return true;
    });
    // console.log('filteredPokemon', filteredPokemon)
    // console.log('pokemonArrayWithDetails', pokemonArrayWithDetails)

    return (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPokemon.map((pokemon, index) => (
                <Link key={index}
                    href={`/pokemon/${pokemon.name}`}
                    passHref>

                    <PokemonDetailsCard
                        pokemon={pokemon}
                    />

                </Link>
            ))}
        </section>
    )
}

export default PokemonGrid