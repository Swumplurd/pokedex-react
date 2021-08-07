import { useState } from "react";
import { AddPokemon } from "../AddPokemon/AddPokemon";
import { PokemonGrid } from "../PokemonGrid/PokemonGrid";

export const PokedexApp = () => {
    const [pokemons, setPokemons] = useState([]);

    return (
        <>
            <div className="bg-danger bg-gradient shadow-lg text-white px-4 py-5 text-center">
                <div className="py-5">
                    <h1 className="display-5 fw-bold text-white">Pokedex React</h1>
                </div>
            </div>

            <div className="container mt-3">
                <div className="row">
                    <div className="col-12">
                        <AddPokemon setPokemons={setPokemons} />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 p-2">
                            {pokemons.map((pokemon) => {
                                return <PokemonGrid key={pokemon} name={pokemon} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
