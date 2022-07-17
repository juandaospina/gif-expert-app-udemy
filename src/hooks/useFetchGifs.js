import { useState, useEffect } from "react";

import getGifs from '../api/getGifs';

const useFetchGifs = (category) => {
    const [ gifs, setGifs ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const newGifs = async () => {
        const res = await getGifs(category);
        setGifs(res);
    }       

    useEffect( () => {
        newGifs();
    }, [] );

    return {
        gifs,
        loading
    }
}

export default useFetchGifs;