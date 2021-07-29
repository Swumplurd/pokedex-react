export const getPokemons = async(pokemon) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${encodeURI(pokemon)}`;
    const respuesta = await fetch(url);
    const pokedex = await respuesta.json();
    
    return [{
        id: pokedex.id,
        name: pokedex.name,
        front_default: pokedex.sprites.front_default,
        front_shiny: pokedex.sprites.front_shiny,
        dream_world: pokedex.sprites.other.dream_world.front_default,
    }]
}