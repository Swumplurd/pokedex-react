import { useState } from "react";
import Swal from 'sweetalert2'

export const AddPokemon = ({ setPokemons }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue > 0 && inputValue < 899) {
            setPokemons((pokemons) => {
                if (pokemons.includes(inputValue)) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Tu busqueda ya se encuentra debajo!'
                    });
                    return [...pokemons]
                } else {
                    return [inputValue, ...pokemons]
                }
            })
            setInputValue("");
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Tu busqueda no tiene coincidencias!'
            });
            setInputValue("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label forhtml="buscarPokemon" className="form-label">
                    Id del Pokemon
                </label>
                <input type="text" onChange={handleInputChange} value={inputValue} className="form-control shadow-lg" id="buscarPokemon" aria-describedby="buscarPokemonHelp" />
                <div id="buscarPokemonHelp" className="form-text">
                    Ingresa el Id del Pokemon (1 - 898)...
                </div>
            </div>
        </form>
    );
};
