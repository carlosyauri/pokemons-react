import { useParams } from "react-router-dom"
import { useEffect} from "react";
import { Link } from "react-router-dom"
import PokeStats from "./components/PokeStats";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage"; 
import usePokemonsStore from "../../zustand/stores/pokemons";

export default function 
PokeDetail(){

    const {id} = useParams();
    // const {getPokemonDetail, pokemonDetail, isLoading, hasError, errorMessage} = useContext(PokemonContext)
    const {getPokemonDetail, pokemonDetail, isLoading, hasError, errorMessage} = usePokemonsStore(state => ({getPokemonDetail: state.getPokemonDetail, pokemonDetail: state.pokemonDetail, isLoading: state.isLoading, hasError: state.hasError, errorMessage: state.errorMessage}));
    
    
    useEffect(() => {
        getPokemonDetail(id).catch(null);
    }, [])

    if ( isLoading) return <Loading title="Cargando pokemon.."/>
    
    return(
        
        <div>
            {hasError ? <ErrorMessage message={errorMessage}/>  : (
                <>  

                    <h1 class="h1">DETALLES DEL POKEMON</h1>

                    <div class="containerDetalles">

                        <div class="containerDettalesCajaInfo">
                            <h3>Info general</h3>
                            <p>{`Name: ${pokemonDetail?.name}`}</p>
                            <p>{`Peso: ${pokemonDetail?.weight} kgs.`}</p>
                            <p>{`Altura: ${pokemonDetail?.height} cms.`}</p>  

                            <button style={{position: "absolute",
                                marginTop: "30px",
                                marginLeft: "-25px",}}>
                                <Link to={`/`}>Volver</Link>
                            </button>
                        </div>
            
                        <div class="containerDettalesCajaInfo">
                            <h3>Habilidades</h3>
                            <PokeStats  stats={pokemonDetail?.stats ?? []} />       
                        </div>
                        
     
                    </div>
                </>
            )}

        </div>

        
    )
}