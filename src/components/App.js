
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs"

const posts = [
  {
    title: "Welcome",
    content: "This is the welcome post of our website."
  },
  {
    title: "About Us",
    content: "We provide high quality tutorials and examples."
  },
  {
    title: "Services",
    content: "We offer web development and design services."
  },
  {
    title: "Contact",
    content: "You can reach us via email or phone."
  },
  {
    title: "Blog",
    content: "Read our latest articles and updates here."
  }
];



const App = () => {
  return (
    <div>
        <Tabs data={posts}/>
    </div>
  )
}

export default App
