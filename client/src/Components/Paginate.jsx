import React from "react";
import { useParams } from "react-router-dom";
import s from './Paginate.module.css'

export default function Paginate ({gamesPerPage, allGames, paginate, currentPage, currentGames}) {
    const params = useParams();
    const pageNum = [];

    for ( let i=1; i<=Math.ceil(allGames/gamesPerPage); i++) {
        pageNum.push(i);
    }

    //Del map salen los números que después se renderizan en el home para poder navegar a través de las páginas
    return (
        <nav key={params.id} className={s.paginateContainer}>
            <ul className={s.nums}>
            <button
                className= {s.button}
                disabled={currentPage <= 1 ? true : false}
                onClick={() => paginate(currentPage - 1)}
              >
                ⬅
              </button>
                {
                    pageNum && pageNum.map(n => (
                        <li key={n}>
                            <button className={s.button} disabled= {currentPage === n? true : false} onClick={()=> paginate(n)}>{n}</button>
                        </li>
                    ))
                }
                <button
                className= {s.button}
                disabled={currentGames.length < gamesPerPage ? true : false}
                onClick={() => paginate(currentPage + 1)}
              >
                ⮕
              </button>
            </ul>
        </nav>
    )
}