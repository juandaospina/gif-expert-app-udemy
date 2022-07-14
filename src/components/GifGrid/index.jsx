import getGifs from '../../api/getGifs';

const GifGrid = (props) => {

    const { category } = props;

    getGifs(category);

    return(
        <>
            <p>{ category }</p>
        </>
    );
}

export default GifGrid;