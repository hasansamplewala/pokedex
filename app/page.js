import { getAllPokemon } from "./utils";
import PokemonGrid from "./components/PokemonGrid";
export default async function Home() {

  const allPokemon = await getAllPokemon(100);
  const pokemonArrayWithDetails = await createPokemonObject(allPokemon);

  // console.log('pokemonArrayWithDetails', pokemonArrayWithDetails);
  async function createPokemonObject(allPokemon) {
    const promises = allPokemon.map(async (pokemon) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
      return res.json();
    });

    const pokemonArrayWithDetails = await Promise.all(promises);

    return pokemonArrayWithDetails;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 xl:p-8">
      
      <PokemonGrid pokemonArrayWithDetails={pokemonArrayWithDetails} />

    </main>
  );
}
