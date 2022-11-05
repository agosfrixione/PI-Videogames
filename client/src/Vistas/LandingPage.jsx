import {Link, useParams} from 'react-router-dom';
import s from './LandingPage.module.css';
// import image from "../Images/Background.jpeg";
 import { useDispatch } from 'react-redux';
import { getVideogames } from '../Actions/Index';
import { useEffect } from 'react';
import NavBar from '../Vistas/NavBar';

export default function LandingPage (){
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

    return(
        <div key={params.id} className={s.landingContainer}>
          <NavBar/>
      <h1 className= {s.text}>Henry Videogames</h1>
      <Link to="/home">
        <button className={s.button}>Start</button>
      </Link>
    </div>
    )
}