import React from "react";

class Menuitems extends React.Component{
    render(){
        const {options,selectOption} = this.props
        
        return(
            <>
            <div className="menu-items">
                {options.map((i,idx)=>
                    <>
                        <div className={selectOption === idx?"select":""} key={idx}>
                            <h2  >{i}</h2>
                        </div>
                        <hr/>
                    </>)
    
                }
            </div>
            </>
        )
    }
}
export default Menuitems;