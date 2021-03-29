
export const getGifs = async (categoria) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria) }&limit=9&api_key=dnloQQzgYyIziJPjej2cj2TELAwBHGwN`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img => {
        return {
            id : img.id,
            title : img.title,
            url : img.images?.downsized_medium.url
        }
    })
    return gifs;
}