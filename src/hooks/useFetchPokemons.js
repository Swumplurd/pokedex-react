import { useState, useEffect } from 'react';
import {getPokemons} from '../helpers/getPokemons';

export const useFetchPokemons = (pokemon) => {
     const [state, setState] = useState({
         data: [],
         loading: true
     });

    useEffect(() => {
        getPokemons(pokemon)
            .then((pokes) => setState({
                data: pokes,
                loading: false
            }))
            .catch((pokes) => setState({
                data: pokes,
                loading: false
            }))
    }, [pokemon]);

    return state
}
