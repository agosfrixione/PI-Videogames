import React from "react";
import { Link, useParams } from "react-router-dom";
import './NavBar.css'
// import Logo from '../Images/logo.svg'

export default function NavBar (){
    const params = useParams();
    return (
        <nav key={params.id} className="nav">
          {/* <img className="img" src={Logo} alt="Logo Principal" /> */}
          <ul className="list">
            <li className="item">
                <Link to="/home" className="link">Videogames App</Link>
            </li>
                <li>
                    <Link to="/videogames">Videogames</Link>
                </li>
                    <li className="item">
                        <Link to="/create">Create Videogame</Link>
                    </li>
            </ul>
        </nav>
      )
}