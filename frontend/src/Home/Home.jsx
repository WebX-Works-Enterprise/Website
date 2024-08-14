import React from "react";
import Navbar from "../Navbar/navbar";


const Home = () => {

    const name = "Webxworks";
  return (
    <div>
        <Navbar/>
        <h1>Home</h1>
        <p>{name}</p>
    </div>
  )
}

export default Home