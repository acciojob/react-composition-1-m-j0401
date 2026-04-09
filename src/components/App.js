
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs"

const posts = [
 "Tab 1","Tab 2","Tab 3"
];



const App = () => {
  return (
    <div>
        <Tabs data={posts}/>
    </div>
  )
}

export default App
