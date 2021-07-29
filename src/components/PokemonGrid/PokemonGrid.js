import { useFetchPokemons } from "../../hooks/useFetchPokemons";
import { PokemonGridItem } from "../PokemonGridItem/PokemonGridItem";

export const PokemonGrid = ({name}) => {

    const {data:pokemons, loading} = useFetchPokemons(name);

    return (
        <>
            {loading && <p className="text-center animate__heartBeat">Cargando...</p>}
                <div className="card h-100 shadow-lg">
                    {
                        pokemons.map(poke => {
                            return <PokemonGridItem key={poke.id} {...poke} />
                        })
                    }
                </div>
        </>
    )
}