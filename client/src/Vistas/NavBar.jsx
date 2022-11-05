import React from "react";
import { Link, useParams } from "react-router-dom";
import s from './NavBar.module.css'
// import Logo from '../Images/logo.svg'

export default function NavBar (){
    const params = useParams();
    return (
        <nav key={params.id} className={s.nav}>
          {/* <img className="img" src={Logo} alt="Logo Principal" /> */}
          <ul className={s.list}>
            <li className={s.item}>
                <Link to="/home" className={s.link}>Videogames App</Link>
            </li>
                <li>
                    <Link to="/videogames">Videogames</Link>
                </li>
                    <li className={s.item}>
                        <Link to="/create">Create Videogame</Link>
                    </li>
            </ul>
        </nav>
      )
}