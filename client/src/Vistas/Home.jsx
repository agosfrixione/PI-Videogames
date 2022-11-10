import React, { useEffect, useState } from "react";
import { getVideogames, setCurrentPage } from "../Actions/Index";
import Cards from '../Components/Cards';
import Paginate from "../Components/Paginate";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "../Vistas/NavBar"
import Header from "../Components/Header";
import Loading from "../Components/Loading";
import s from "./Home.module.css";

export default function Home() {
  
  const params = useParams();
  const dispatch = useDispatch();

  const [carga, setCarga] = useState(true);
  const selectedVideogames = useSelector(state => state.selectedVideogames);
  const currentPage = useSelector(state => state.currentPage); // 1
  const gamesPerPage = 15 // Cantidad de juegos que debe haber por pagina
  const indexOfLastGame = currentPage * gamesPerPage // 1 * 15 = 15
  const indexOfFirstGame= indexOfLastGame - gamesPerPage // 15 - 15 = 0
  const currentGames = selectedVideogames.slice(indexOfFirstGame, indexOfLastGame) //para dividir la cantidad de juegos por pagina

  useEffect(() => {
    dispatch(getVideogames()).then(() =>setCarga(false));
  }, [dispatch]);

  const paginate = (pageNum) => { // Establece el número de página
    dispatch(setCurrentPage(pageNum))
  };


  if(carga){
    return (
      <div>
        <Loading/>
      </div>
    )
  }
    return (
    <div key={params.id} className={s.backgroundContainer}>
      <NavBar />
      <div className={s.filterBar}>
      <Header className={s.detailButton} />
      </div>
      <div>
            <Paginate
                   gamesPerPage={gamesPerPage}
                   allGames={selectedVideogames.length}
                   currentPage= {currentPage}
                   paginate={paginate}
                   currentGames={currentGames}
            />
        </div>
        <div className={s.cards}>
                  {
          selectedVideogames.length? (
              <div >
              <Cards actualVideogames={currentGames} />
              </div>
          ) :
           <div className={s.notFound}>
            <h2>No videogames found</h2>
           </div>
        } 
            </div>
    </div>
    ); 
};