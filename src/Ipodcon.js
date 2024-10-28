import React from "react";
import Ipod1 from "./Ipod1";
import Ipod2 from "./Ipod2";
import "./Ipod.css"

class Ipodcon extends React.Component
{
  render()
  {
    const {options,menu,selectOption,Select,sng_list,song_ref,sng_idx,song_url,pnp,all_songs,music_scrn,back,forward}=this.props;
     return(
      <>
      <div className="ipodcon">
        
            <Ipod1  options = {options}
              selectOption ={selectOption}
              sng_list={sng_list}
              all_songs={all_songs}
              song_url={song_url}
              song_ref={song_ref}
              music_scrn={music_scrn}
              sng_idx={sng_idx}
              
            />
            <Ipod2 menu={menu}
            Select={Select}
            back={back}
            forward={forward}
            pnp={pnp}
            />
            
      </div>
      </>
     )
  }
}

export default Ipodcon;