export const getGifs = async(category) => {
    //const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=C0pssNE68MB77U09gNf6Jj3XiyW0UPLq';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=C0pssNE68MB77U09gNf6Jj3XiyW0UPLq`;
    
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map (img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    //setImages(gifs);
    //console.log(gifs);
    return gifs;
};