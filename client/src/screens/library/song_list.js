let songs = [
    {
        title: 'Hey Soul Sister',
        path:  '/Songs/Hey Soul Sister.m4a',
        artist:' Train',
        cover: '/Songs/HeySoulSisterCover.jpg',
    },
    {
        title: 'Leave Me Slowly',
        path:  '/Songs/Leave Me Slowly.m4a',
        artist:'Lewis Capaldi',
        cover: '/Songs/LeaveMeSlowlyCover.jpg',
    },
    {
        title: 'On The Loose',
        path:  '/Songs/On the Loose.m4a',
        artist:' Niall Horan',
        cover: '/Songs/OnTheLooseCover.jpg',
    },
    {
        title: 'Until I Found You',
        path:  '/Songs/Until I Found You.m4a',
        artist:' Stephen Sanchez',
        cover: '/Songs/UntilIFoundYouCover.png',
    },
];
export default songs;

/*
export default function renderSongs(){
        const songList = document.getElementById("song-list");
        if (!songList){
            console.error("Element with ID 'song-list' not found.");
            return;
        }

    const songElements = [];

    songs.forEach((song,index) => {
        const li = document.createElement("li");
        li.setAttribute("data-index", index);

        const title = document.createElement("span");
        title.textContent = song.title;

        const artist = document.createElement("span");
        artist.textContent = song.artist;

        const cover = document.createElement("img");
        cover.src = song.cover;
        cover.alt = song.title;

        li.appendChild(cover);
        li.appendChild(title);
        li.appendChild(artist);

        songList.appendChild(li);

        songElements.push(li);
    
    });
    return songElements;
} */