import PokemonContext from "./index"
import apiCall from "../../api"
import { useState } from "react"


export default function PokemonProvider({children}){

    const [pokemons, setPokemons] = useState([])
    const [pokemonDetail, setPokemonDetail] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [hasError, setHasError] = useState("");

    const getPokemons = async() => {
        try {
            setIsLoading(true);
            setErrorMessage("");
            setHasError(false);

            
            // throw new Error("Hey!"); --> Generamos error para mostrar message de error
            const pokemonResult = await apiCall({url: "https://pokeapi.co/api/v2/pokemon?limit=100&offset=100"})
            setPokemons(pokemonResult.results)

        }catch(error){
            
            setPokemons([])
            setErrorMessage("Algo a pasado, verifica tu conexión");
            setHasError(true);
        }finally {
            setIsLoading(false)
        }
    }

    const getPokemonDetail = async (id) => {
        if( !id) Promise.reject("Id es requerido")

        try {
            
            setIsLoading(true);
            setErrorMessage("");
            setHasError(false);

            

            const pokemonDetail = await apiCall({url: `https://pokeapi.co/api/v2/pokemon/${id}`})
            setPokemonDetail(pokemonDetail)
           

        } catch (error){
            console.log(error)
            setPokemonDetail({})
            setErrorMessage("Algo a pasado, verifica tu conexión");
            setHasError(true);

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
                isLoading,
                errorMessage,
                hasError
            }}>

            {children}
            
        </PokemonContext.Provider>
    )


}