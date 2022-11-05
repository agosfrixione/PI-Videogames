import React from 'react';
import { Link, useParams } from 'react-router-dom';
import s from './Card.module.css';

export default function Card({ image, name, genres, id }) {
    const params = useParams();
    return (
        <div key={params.id} className={s.cardContainer}>
            <Link className={s.imageDiv} to={`/videogame/${id}`}>
                <img className={s.image} src={image} width="120" height="60" alt="image not fount" />
            </Link>
            <div className={s.textDiv}>
                    <h3 className={s.text}>{name}</h3>
                    <h4 className={s.text}> {genres.join(" | ")}</h4>
                    <Link className="btnCountry" to={`/videogame/${id}`}>
                        <button className="buttonCountry">More</button>
                    </Link>
            </div>
        </div>
    );
};