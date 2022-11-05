import React from 'react';
import Card from './Card.jsx';
import s from './Cards.module.css';

export default function Cards({ allVideogames }) {
    if (!allVideogames.length) {
        return (

            <div>No videogames to show</div>
        )
    } else {
        return (
            <div className={s.cards}>
                {allVideogames && allVideogames.map(v =>
                    <Card
                        key={v.id}
                        id={v.id}
                        image={v.image}
                        name={v.name}
                        genres={v.genres}
                    />)}
            </div>
        );
    }
}