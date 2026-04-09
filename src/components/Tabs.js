
import React, { useState } from "react";


const Tabs=({data})=>{
    let[cont,setCont]=useState(data[0])
    function handleClick(e){
       let p= e.target.id.slice(4);
       console.log(p);
       setCont(data[p]);
    }

   
    return(
        <div>
            <ul>
        {    data.map((val,ind)=>
                <li  id={`list${ind}`}    key={ind} onClick={handleClick}>{val}</li>)
        }
        </ul>
        <p>This is the content for {cont}.</p>
        </div>
    )

}
export default Tabs;