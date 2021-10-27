import PokemonListItem from "./PokemonListItem";

export default function PokemonList({pokemons}){


    return(
        <>  

                <h1 class="h1">LISTA DE POKEMONS</h1>
            
            <div class="container">
                {pokemons?.map((pokemon, index) => <PokemonListItem key={index} {...pokemon} /> )}
            </div>
            
        </>
    )
}