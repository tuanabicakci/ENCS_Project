import React from 'react';
import "./NavBar.css";
import {Link} from "react-router-dom";
import Image from "./computer.png";

export const MenuItems = [
    {name:'Homepage', link:"/"},
    {name: 'Instructions', link:"/instructions"},
    {name:'Troubleshooting', link:"/troubleshooting"},
    {name:'Credits', link: "/credits"}

]

function NavBar(props) {
    return (
        <div className="navbar_container">
        <nav className="navbar">
            <Link to={"/"}>
                <img id="computer_navbar" src={Image} alt=""/>
            </Link>

            <ul className='nav-menu'>

                {MenuItems.map((item, index) => {
                    return (
                        <li className="nav-links" key={index}>
                            <Link to={item.link} >
                                {item.name}
                            </Link>
                        </li>

                    );
                })}

            </ul>
        </nav>
        </div>
    );
}

export default NavBar;