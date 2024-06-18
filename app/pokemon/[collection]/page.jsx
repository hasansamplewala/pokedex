import React from 'react'
import PokemonDetailsCard from '../../components/PokemonDetailsCard'
import { getPokemon } from '../../utils'

export default async function page({params}) {

    // const params = useParams()
    // console.log('params', params);
    const pokemon = await getPokemon(params.collection)
    
  return (
    <div className="flex flex-col items-center justify-between p-2 xl:p-4">
    <h1>You searched for : {`${
      params.collection.charAt(0).toUpperCase() + params.collection.slice(1)
    }`}</h1>
    <PokemonDetailsCard
    pokemon={pokemon}
    />
</div>
  )
}
