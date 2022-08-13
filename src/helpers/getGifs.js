export const getGifs = async (category) => {
    const api_key = "XKtIyYWy2vaTkwIRYcIAHPNN2IjuLoDv";
    const q = `${category}`;
    const limit = 10;
    const type = "https";
    const url = `${type}://api.giphy.com/v1/gifs/search?q=${encodeURI(q)}&limit=${limit}&api_key=${api_key}`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        };
    });
    return gifs;
};
