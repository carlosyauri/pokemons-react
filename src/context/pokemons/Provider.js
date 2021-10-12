import PokemonContext from "./index"
import apiCall from "../../api"
import { useState } from "react"
import { useContext } from "react/cjs/react.development"

export default function PokemonProvider({children}){

    const [pokemons, setPokemons] = useState([])
    const [pokemonDetail, setPokemonDetail] = useState({})
    const [isLoading, setIsLoading] = useState(false);

    const getPokemons = async() => {
        try {
            setIsLoading(true)
            const pokemonResult = await apiCall({url: "https://pokeapi.co/api/v2/pokemon?limit=100&offset=100"})
            setPokemons(pokemonResult.results)

        }catch(error){
            setPokemons([])
        }finally {
            setIsLoading(false)
        }
    }

    const getPokemonDetail = async (id) => {
        if( !id) Promise.reject("Id es requerido")

        try {
            setIsLoading(true)
            const pokemonDetail = await apiCall({url: `https://pokeapi.co/api/v2/pokemon/${id}`})
            setPokemonDetail(pokemonDetail)

        } catch (error){

            setPokemonDetail({})
        } finally {
            setIsLoading(false)
        }
    }

    return(
        <PokemonContext.Provider value={{
                getPokemons, 
                pokemons, 
                getPokemonDetail,
                pokemonDetail,
                isLoading
            }}>

            {children}
            
        </PokemonContext.Provider>
    )


}