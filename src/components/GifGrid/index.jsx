import useFetchGifs from '../../hooks/useFetchGifs';
import GifCard from '../GifCard';

export const GifGrid = ( props ) => {

    const { category } = props;
    const { gifs, loading } = useFetchGifs(category);

    return(
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                {
                    !loading ? (
                        <div>Cargando...</div>
                    ) : (
                        gifs.map( gif => (
                            <GifCard 
                                key = {gif.id}
                                props = {gif}
                            />
                        ))
                    )
                }
            </div>
        </>
    );
}
