import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { deleteGame } from '../Actions/Index';
import s from './Card.module.css';


export default function Card({ image, name, genres, rating, id }) {

    const dispatch = useDispatch();
    const params = useParams();

    function handleDelete(e) {
        console.log(id);
        e.preventDefault();
        dispatch (deleteGame(id))
        .then((response) => alert(response))
        .catch((error) => alert(error))
      }

    return (
        <div key={params.id} className={s.cardContainer}>
                <button 
                onClick={(e) => handleDelete(e)}
                className={s.deleteButton}
                value='delete'
                >
                  <span>X</span>
                  </button>
            <Link className={s.imageDiv} to={`/videogame/${id}`}>
                <img className={s.image} src={image} width="120" height="60" alt="not fount" />
                <div className={s.textDiv}>
                    <h2 className={s.text}>{name}</h2>
                    <h3 className={s.text}> {genres?.map((e) => (typeof e === "object" ? e.name : e)).join(" | ")}</h3>
                    <h4 className={s.text}>⭐ {rating}</h4>

            </div>
            </Link>
        </div>
    );
};