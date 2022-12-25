import s from "../styles/Navbar.css"
import React from 'react'
import Login from './Login'
import Sidebar from "./Sidebar"
const Navbar = () => {


  return (
    <div className="header">
      <Sidebar/>
      <div className="icon">
      TeaPartea
      <img className="icon" src="./sprout.png"/>
      </div>
      <div/>
    </div>

  )
}

export default Navbar