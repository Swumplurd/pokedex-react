import { useState, useEffect } from 'react';
import {getPokemons} from '../helpers/getPokemons';

export const useFetchPokemons = (pokemon) => {
     const [state, setState] = useState({
         data: []
     });

    useEffect(() => {
        getPokemons(pokemon)
            .then((pokes) => setState({
                data: pokes
            })
        )
    }, [pokemon]);

    return state
}
