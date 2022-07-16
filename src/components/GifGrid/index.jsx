import { useState, useEffect } from 'react';
import getGifs from '../../api/getGifs';

const GifGrid = ( props ) => {

    const { category } = props;
    const [ gifs, setGifs ] = useState([]);

    const newGifs = async () => {
        const res = await getGifs(category);
        setGifs(res);
    }       

    useEffect(() => {
        newGifs();
    }, []);


    return(
        <>
            <p>{ category }</p>

            <ol>
                {
                    gifs.map( ({ id, title }) => (
                        <li key={id}>{title}</li>
                    ))
                }
            </ol>
        </>
    );
}

export default GifGrid;