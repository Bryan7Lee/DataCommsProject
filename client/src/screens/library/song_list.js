let songs = [
    {
        title: 'Superpowers',
        path:  'superpowers-danielcaesar',
        artist:'Daniel Caesar',
        cover: 'superpowers-danielcaesar',
    },
    {
        title: 'See You Again',
        path:  'seeyouagain_tylerthecreator',
        artist:'Tyler, The Creator',
        cover: 'seeyouagain_tylerthecreator',
        title: 'Hey Soul Sister',
        path:  '/client/src/assets/Hey Soul Sister.m4a',
        artist:' Train',
        cover: '/client/src/assets/HeySoulSisterCover.jpg',
    },
    {
        title: 'Leave Me Slowly',
        path:  '/client/src/assets/Leave Me Slowly.m4a',
        artist:'Lewis Capaldi',
        cover: '/client/src/assets/LeaveMeSlowlyCover.jpg',
    },
    {
        title: 'On The Loose',
        path:  '/client/src/assets/On the Loose.m4a',
        artist:' Niall Horan',
        cover: '/client/src/assets/OnTheLooseCover.jpg',
    },
    {
        title: 'Until I Found You',
        path:  '/client/src/assets/Until I Found You.m4a',
        artist:' Stephen Sanchez',
        cover: '/client/src/assets/UntilIFoundYouCover.png',
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