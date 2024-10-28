import React from "react";
import "./Ipod.css"

class Ipod2 extends React.Component
{
  render()
  {
    // const {menu,selectBtn,backBtn,forBtn,pp} = this.props
    const {menu,Select,back,forward,pnp} = this.props
     return(
      <>
        <div className="ipodcon2">
         
             <button className="center" onClick={Select}>
                <h2>Select</h2>
             </button>

             <button className="menu-button"  onClick={menu}>
               <i className="fa-solid fa-bars"></i>
             </button>

             <button className="left-button" onClick={back}>
             <i className="fa-solid fa-backward"></i>
             </button>
            <button className="right-button" onClick={forward}>
            <i className="fa-solid fa-forward"></i>
            </button>
            <button className="play-pause" onClick={pnp}>
                <i className="fas fa-play"></i>/<i className="fas fa-pause"></i>
            </button>
        </div>
      </>
     )
  }
}

export default Ipod2;