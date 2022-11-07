import React from 'react';
import Card from './Card.jsx';
import s from './Cards.module.css';
import Loading from "./Loading";

export default function Cards({ allVideogames }) {
    if (!allVideogames.length) {
        return (

            <div>
                <Loading />
                </div>
        )
    } else {
        return (
            <div className={s.cards}>
                {allVideogames.length && allVideogames.map(v =>
                    <Card
                        key={v.id}
                        id={v.id}
                        image={v.image}
                        name={v.name}
                        genres={v.genres}
                        rating={v.rating}
                    />)}
            </div>
        );
    }
}