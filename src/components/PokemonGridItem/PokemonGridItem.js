export const PokemonGridItem = ({id, name, front_default, front_shiny, dream_world}) => {
    return (
        <>
            <img src={front_shiny} className="card-img-top" alt={front_shiny}/>
            <div className="card-body d-grid">
                <h4 className="card-title text-center text-uppercase">{name || 'Sin nombre'}</h4>
                <a href={front_shiny || 'No hay variante'} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Ver imagen</a>
            </div>
        </>    
    )
}