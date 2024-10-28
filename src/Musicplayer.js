import React from "react";
import songplay from "./Images/song-play.jpeg";
class Musicplayer extends React.Component
{
   render()
   {
      const {song_url,sng_idx,all_songs,song_ref}=this.props;
      // console.log(song_url[song_idx]);
      // console.log(music_scrn)
      console.log(song_url)
      console.log(song_ref)
      console.log(sng_idx)
      console.log(all_songs)
      return(
        <>
        <div className="music_con">
           <div>
              <h3>{all_songs[sng_idx]}</h3>
           </div>
           <div>
             <img className="song_img" src={songplay} />
           </div>
           <audio  className="audio_cntrl"ref ={song_ref} src={song_url[sng_idx]} controls></audio>
        </div>

        </>
      )
   }
}

export default Musicplayer;