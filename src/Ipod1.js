import React from "react";
import "./Ipod.css";
import Menu from "./Menu";
import Songlists from "./Songlists";


class Ipod1 extends React.Component
{
  render()
  {
    const {options,selectOption,sng_list,sng_idx,song_url,music_scrn,all_songs,song_ref}=this.props;
     return(
      <>
        <div className="ipodcon1">
        <Menu 
            options = {options}
            selectOption ={selectOption}
            />
        {
          sng_list ?
          <Songlists 
          sng_list={sng_list}
          all_songs={all_songs}
          song_url={song_url}
          song_ref={song_ref}
          music_scrn={music_scrn}
          sng_idx={sng_idx}
          
          />:""
        }
       
        </div>
      </>
     )
  }
}

export default Ipod1;
