import { useState } from "react";

export const AddPokemon = ({setPokemons}) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
       e.preventDefault();
       setPokemons((pokemons) => [inputValue, ...pokemons]);
       setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label forhtml="buscarPokemon" className="form-label">Id o Nombre del Pokemon</label>
                <input type="text" onChange={handleInputChange} value={inputValue} className="form-control" id="buscarPokemon" aria-describedby="buscarPokemonHelp"/>
                <div id="buscarPokemonHelp" className="form-text">Ingresa el Id o el Nombre del Pokemon...</div>
            </div>
        </form>
    )
}