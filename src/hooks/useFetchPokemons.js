import { useState, useEffect } from "react";
import { getPokemons } from "../helpers/getPokemons";

export const useFetchPokemons = (pokemon) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        setTimeout(() => {
            getPokemons(pokemon).then((pokes) =>
                setState({
                    data: pokes,
                    loading: false,
                })
            );
        }, 500);
    }, [pokemon]);

    console.log(state)

    return state;
};
