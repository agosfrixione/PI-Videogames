import React from "react";
import { Link, useParams } from "react-router-dom";
import s from './NavBar.module.css'
import Logo from '../Images/logo.png'

export default function NavBar (){
    const params = useParams();
    return (
        <nav key={params.id} className={s.nav}>
          <img className="img" src={Logo} alt="Logo Principal" />

          <ul className={s.menu}>
            <li>
                <Link to="/home" className={s.app}>Videogames App</Link>
            </li>
                    <li>
                        <Link to="/create" className={s.create}>Create Videogame</Link>
                    </li>
            </ul>
        </nav>
      )
}