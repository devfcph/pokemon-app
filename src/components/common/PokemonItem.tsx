import React, { useEffect, useState } from 'react'
import { Pokemon } from '../../interfaces/pokemontype'
import { getPokemon } from '../../services/pokemon/pokemon'


interface PokemonProps  {
    url: string,
    onDelete : () => void
}

const PokemonItem = ( props: PokemonProps ) => {

    const [pokemon, setPokemon] = useState<Pokemon>()

    useEffect( () => {
        const response = getPokemon(props.url);
        response.then( (data) => {
            //console.log("Hola desde pokemon item: ", data)
            setPokemon(data.data);
        })
        .catch( (error) => {
            console.log("Error en pokemon item, ", error);
        })
    }, [props.url] )


    const handleModal = () => {
        console.log("Abrir modal")
    }


  return (
   <tr>
     <td>{pokemon?.id}</td>
            <td>{pokemon?.name}</td>
            <td>{pokemon?.weight}</td>
            <td>{pokemon?.height}</td>
            <td>
                <img src={pokemon?.sprites.front_default} alt={pokemon?.name}
                onClick={handleModal}
                />
            </td>
            <td>
                <img src={pokemon?.sprites.back_default} alt={pokemon?.name}
                onClick={handleModal}
                />
            </td>
            <td><button >X</button></td>
   </tr>
  )
}

export default PokemonItem