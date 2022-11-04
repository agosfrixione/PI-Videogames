import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Card.css';

export default function Card({ image, name, genres, id }) {
    const params = useParams();
    return (
        <div key={params.id} className='cardContainer'>
            <Link className='imageDiv' to={`/videogame/${id}`}>
                <img className="image" src={image} width="120" height="60" alt="image not fount" />
            </Link>
            <div className='textDiv'>
                    <h3 className='text'>{name}</h3>
                    <h4 className='text'> {genres.join(" | ")}</h4>
                    <Link className="btnCountry" to={`/videogame/${id}`}>
                        <button className="buttonCountry">More</button>
                    </Link>
            </div>
        </div>
    );
};