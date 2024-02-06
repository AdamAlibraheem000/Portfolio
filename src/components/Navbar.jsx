import { Link } from "react-router-dom"
import {FaBars,FaTimes} from 'react-icons/fa'
import "./NavbarStyling.css"
import { useState } from "react"

const Navbar = () => {

    const[click,setClick] = useState(false)

    const handleClick = () => {
        // toggles boolean value
        setClick(!click)
    }

    const [color, setColor] = useState(false)

    const changeColor = () => {
        if(window.scrollY >= 100){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener("scroll", changeColor)



  return (
    <div className={color ? "header header-bg" : "header"}>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} color={{color: "#fff"}}/>)
            : (<FaBars size={20} color={{color: "#fff"}}/>)}
            
        </div>
    </div>
  )
}

export default Navbar