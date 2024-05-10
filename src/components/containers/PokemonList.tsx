import React, { useEffect, useMemo, useState } from "react";
import { getAll } from "../../services/pokemon/pokemon";
import PokemonItem from "../common/PokemonItem";

const PokemonList = () => {

    const [pokemonList, setPokemonList] = useState([])
    
    const [filter, setFilter] = useState("")

    const [auxiliarList, setAuxiliarList] = useMemo( () => {
        return pokemonList ? pokemonList.filter( item => {
            item.name.includes(filter)
        }) : []
    }, [filter, pokemonList])

    useEffect( () => {
        const response = getAll();

        response.then((data) => {
            //console.log(data);
            setPokemonList(data.data.results);
        })
        .catch( (e) => {
            console.log(e);
        })
    }, [] )

    

    
    const hanldeOnChange : React.ChangeEventHandler<HTMLInputElement> = (evt ) => {
        setFilter(evt.target.value)
        console.log("Mi filtro: ", filter)
    }


    const handleOnDelete = () => {
        console.log("Eliminar");
    }

  return (
    <div>
        <input type="text" name="buscador" id="buscador" placeholder="Buscar"
        onChange={hanldeOnChange}
        />
        <hr />
      <table>
        <thead>
          <tr>
            <th colSpan={4}><b>DATOS DEL POKEMON</b></th>
            <th colSpan={2}>Imágenes</th>
            <th colSpan={1}>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Nombre</td>
            <td>Peso</td>
            <td>Altura</td>
            <td>Frontal</td>
            <td>Trasera</td>
            <td><button>X</button></td>
          </tr>
          {
                pokemonList.map(item => {
                    return <PokemonItem
                    url={item.url}
                    key={item.name}
                    onDelete={handleOnDelete}
                    ></PokemonItem>
                })
            }
        </tbody>
      </table>
    
    <p>
        {pokemonList.map(item => {
            console.log(item);
            return null;
        })}
    </p>

    </div>
  );
};

export default PokemonList;
