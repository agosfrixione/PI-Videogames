import React from 'react';
import { Link, useParams } from 'react-router-dom';
import s from './Card.module.css';

export default function Card({ image, name, genres, rating, id }) {
    const params = useParams();
    return (
        <div key={params.id} className={s.cardContainer}>
            <Link className={s.imageDiv} to={`/videogame/${id}`}>
                <img className={s.image} src={image} width="120" height="60" alt="image not fount" />
                <div className={s.textDiv}>
                    <h1 className={s.text}>{name}</h1>
                    <h3 className={s.text}> {genres?.map((e) => (typeof e === "object" ? e.name : e)).join(" | ")}</h3>
                    <h4 className={s.text}>⭐ {rating}</h4>

            </div>
            </Link>
        </div>
    );
};