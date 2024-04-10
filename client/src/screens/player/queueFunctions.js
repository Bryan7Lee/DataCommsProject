export let qsongs = [];
export const addToQueue = (title, artist) => {
    const song = {title, artist};
    qsongs = [...qsongs, song];
    console.log("song added", song);

};
