export async function getPokemonTypes() {
    const response = await fetch('https://pokeapi.co/api/v2/type');
    const data = await response.json();
    // console.log('data', data);
    return data.results;
}

export const createUrl = (typeFilter, pokemonSearch) => {
    // console.log('typeFilter', typeFilter);
    // console.log('pokemonSearch', pokemonSearch);
    
    return `?pokemonSearch=${pokemonSearch}&typeFilter=${typeFilter}`;
  };

export const getAllPokemon = async (limit) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    const data = await response.json();
    return data.results;
}

export const getPokemon = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    // console.log('getPokemon data', data);
    return data;
}