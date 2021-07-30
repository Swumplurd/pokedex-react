import { useFetchPokemons } from "../../hooks/useFetchPokemons";
import { PokemonGridItem } from "../PokemonGridItem/PokemonGridItem";

export const PokemonGrid = ({name}) => {

    const {data:pokemons} = useFetchPokemons(name);

    return (
        <>
            <div className="card border-danger h-100 shadow-lg px-0 animate__backInLeft">
                {
                    pokemons.map(poke => {
                        return <PokemonGridItem key={poke.id} {...poke} />
                    })
                }
            </div>
        </>
    )
}