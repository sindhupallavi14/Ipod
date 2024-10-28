import React from "react";
import "./Ipod.css";
import Musicplayer from "./Musicplayer"

class Songlists extends React.Component
{
   render()
   {
    const {sng_list,music_scrn,song_url,song_ref,sng_idx,all_songs}=this.props;
  
      return(
        <>
        
        {music_scrn && (
          <Musicplayer
          sng_idx={sng_idx}
          all_songs={all_songs}
          song_url={song_url}
          song_ref={song_ref}
          />
        )

        }
         {sng_list && (
            <div className="song_screen">
               <div className="songs-heading">
                   <h3>Songs List</h3>
               </div>
               {all_songs.map((item, indx) => (
                    <div key={indx} className={sng_idx === indx ? "sel-song" : "song"}>
                        <h4>{item}</h4>
                    </div>
                ))}
                 
            </div>
         )}
        
        </>
      )
   }
}

export default Songlists;