import { useState } from "react";
import { AddPokemon } from "../AddPokemon/AddPokemon";
import { PokedexGrid } from "../PokemonGrid/PokemonGrid";

export const PokedexApp = () => {
    const [pokemons, setPokemons] = useState([]);

    return (
        <>
            <div className="bg-dark text-secondary px-4 py-5 text-center">
                <div className="py-5">
                    <h1 className="display-5 fw-bold text-white">Pokedex React</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="fs-5 mb-4"></p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container mt-3">
                <div className="row">
                    <div className="col-12">
                        <AddPokemon setPokemons={setPokemons}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <ol className="p-0 m-0">
                            {
                                pokemons.map((pokemon) => {
                                    return (
                                        <PokedexGrid key={pokemon} name={pokemon} />
                                    )
                                })
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}