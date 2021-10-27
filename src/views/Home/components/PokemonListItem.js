import { Link } from "react-router-dom"

export default function PokemonListItem ({name, url}){

    const getId = () => url.split("/")[6];
    

    return(

            <div class="subContainer">
                        <p>{name}</p>
                        <button>
                            <Link to={`/pokemon/${getId()}`}> Ver detalle</Link>
                        </button>

                        
            </div>


    )
}