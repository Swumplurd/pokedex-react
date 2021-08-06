import { useFetchPokemons } from "../../hooks/useFetchPokemons";
import { PokemonGridItem } from "../PokemonGridItem/PokemonGridItem";

export const PokemonGrid = ({ name }) => {
    const { data: pokemons, loading } = useFetchPokemons(name);

    return (
        <>
            <div className="card border-danger h-100 shadow-lg px-0 animate__backInLeft">
                {loading && (
                    <div className="card-img-top spinner-grow text-danger mx-auto" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )}
                {pokemons.map((poke) => {
                    return <PokemonGridItem key={poke.id} loading={loading} {...poke} />;
                })}
            </div>
        </>
    );
};
