import "./Home.css";
import React, { useEffect } from "react";
import { getVideogames, setCurrentPage } from "../Actions/Index";
import Cards from '../Components/Cards';
import Paginate from "../Components/Paginate";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "../Vistas/NavBar"
import Header from "../Components/Header";

export default function Home() {
  
  const params = useParams();
  const dispatch = useDispatch();

  const selectedVideogames = useSelector(state => state.selectedVideogames);
  const currentPage = useSelector(state => state.currentPage); // 1
  const gamesPerPage = 15 // Cantidad de juegos que debe haber por pagina
  const indexOfLastGame = currentPage * gamesPerPage // 1 * 15 = 15
  const indexOfFirstGame= indexOfLastGame - gamesPerPage // 15 - 15 = 0
  const currentGames = selectedVideogames.slice(indexOfFirstGame, indexOfLastGame) //para dividir la cantidad de juegos por pagina

  useEffect(() => {
    if (!selectedVideogames.length) dispatch(getVideogames());
    }, []);

  const paginate = (pageNum) => { // Establece el número de página
    dispatch(setCurrentPage(pageNum))
  };

    return (
    <div key={params.id} className="backgroundContainer">
      <NavBar />
        <Header />
        <div >
        <button
                disabled={currentPage <= 1 ? true : false}
                onClick={() => paginate(currentPage - 1)}
              >
                ⬅
              </button>
            <Paginate
                   gamesPerPage={gamesPerPage}
                   allGames={selectedVideogames.length}
                   currentPage= {currentPage}
                   paginate={paginate}
            />
            <button
                disabled={currentPage >= 7 ? true : false}
                onClick={() => paginate(currentPage + 1)}
              >
                ⮕
              </button>
        </div>
        <div className="homeCards">
            <Cards allVideogames={currentGames} />
            </div>
    </div>
    );
};