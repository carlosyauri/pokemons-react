import { useEffect, useContext } from "react";

import PokemonList from "./components/PokemonList";
import PokemonContext from "../../context/pokemons";

export default function Home(){
    const {getPokemons, pokemons} = useContext(PokemonContext)

    useEffect(() => {
        getPokemons().catch(null)
    }, []);

    return (
        <div>
            <PokemonList pokemons={pokemons}/>
        </div>
    );
}