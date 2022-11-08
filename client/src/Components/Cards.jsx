import React from 'react';
import Card from './Card.jsx';
import s from './Cards.module.css';
import { useParams } from 'react-router-dom';

export default function Cards({ allVideogames }) {
    const params = useParams();
        return (
            <div className={s.cards} key={params.id}>
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
