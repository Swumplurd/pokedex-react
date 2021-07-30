import { useState } from 'react';

export const PokemonGridItem = ({id, name, front_default, front_shiny}) => {
    const [shiny, setShiny] = useState(front_default)

    const handleShiny = (event) => {
        if (event.target.checked === true) {
            setShiny(front_shiny);
        } else {
            setShiny(front_default)
        }
    };

    return (
        <>
            <img src={shiny} className="card-img-top" alt={shiny}/>
            <div className="card-body d-grid">
                <h5 className="card-title text-center text-uppercase">{id + ' - ' + name}</h5>
            </div>
            <div class="card-footer">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id={name} onChange={handleShiny} />
                    <label className="form-check-label" htmlFor={name}>Ver Shiny</label>
                </div>
            </div>
        </>    
    )
}