import {Link, useParams} from 'react-router-dom';
import './LandingPage.css';
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
        <div key={params.id} className="containerLanding">
          <NavBar/>
      <h1>Henry Videogames</h1>
      <Link to="/home">
      <h2 contenteditable spellcheck="false">Start</h2>
      </Link>
      {/* <img className="img1" src={image} alt="Videogames App" /> */}
    </div>
    )
}