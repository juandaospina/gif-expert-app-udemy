const getGifs = async ( category ) => {
    const apiKey = "nY1OkmkVO5OPW2OeG1tHaNPuYl3uNzZ4";
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=5`)
    const { data } = await res.json();

    const gifs = data.map( gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));

    // console.log(gifs);
    return gifs;
}

export default getGifs;