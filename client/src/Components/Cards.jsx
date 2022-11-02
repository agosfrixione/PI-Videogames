import React from 'react';
import Card from './Card.jsx';
import './Cards.css';

export default function Cards({ allVideogames }) {
    if (!allVideogames.length) {
        return (

            <div>No videogames to show</div>
        )
    } else {
        return (
            <div className="cards">
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