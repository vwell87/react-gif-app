export const getGifs = async(category) => {
        
    const url=`https://api.giphy.com/v1/gifs/search?api_key=GkAYsEPBjV2eHTGmA7Yy9h7xj1Q6ar71&q=${category}&limit=100`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    console.log(gifs);
    return gifs;

}