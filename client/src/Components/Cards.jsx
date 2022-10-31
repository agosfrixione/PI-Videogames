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
                {allVideogames && allVideogames.map(videogame =>
                    <Card
                        key={videogame.id}
                        id={videogame.id}
                        image={videogame.image}
                        name={videogame.name}
                        genres={videogame.genres}
                    />)}
            </div>
        );
    }
}