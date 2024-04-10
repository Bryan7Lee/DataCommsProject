import songs from "../../screens/library/song_list"; // Import the songs 




export default function Queue(){


return (

    <div className="queue">
         <div className="queue-list">
          <ul>
            {songs.map((song,index)=> (
              <li key={index}>
                <button className="qsong-button">
                <div className="qsong-info">
                  <p className="qsong-title">{song.title}</p>
                  <p className="qsong-artist">{song.artist}</p>
                </div>
                </button>
              </li>
            ))}
          </ul>
        </div>

    </div>
)

}