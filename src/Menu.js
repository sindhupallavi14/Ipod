import React from "react";
import "./Ipod.css"
import Menuitems from "./Menuitems";

class Menu extends React.Component
{
    
  render()
  {
    const {options,selectOption}=this.props;
     return(
      <>
        <div className="menu-con">
            <div className="ipod-menu">
                <h3 >React ipod</h3>
               
            </div>
            <Menuitems 
            options = {options}
            selectOption ={selectOption}
            
            />
        </div>
      </>
     )
  }
}

export default Menu;