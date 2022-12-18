import style from "./navbar.module.css"
import React from "react"
import { Link } from "react-router-dom"
const Menu=()=>{
    return(
        <ol  id={style.MenuBlock}>
            <li><Link to="/">Explore</Link></li>
            <li><Link to="/abc">Hirework</Link></li>
            <li><Link to="/xyz">Challenges</Link></li>
        </ol>
    )
} 
export default Menu