import React from "react";
import { useParams } from "react-router-dom";
import './Paginate.css'

export default function Paginate ({gamesPerPage, allGames, paginate, currentPage}) {
    const params = useParams();
    const pageNum = [];

    for ( let i=1; i<=Math.ceil(allGames/gamesPerPage); i++) {
        pageNum.push(i);
    }

    //Del map salen los números que después se renderizan en el home para poder navegar a través de las páginas
    return (
        <nav key={params.id} className="paginateContainer">
            <ul className="paginate">
                {
                    pageNum && pageNum.map(n => (
                        <li key={n}>
                            <button disabled= {currentPage === n? true : false} onClick={()=> paginate(n)}>{n}</button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}