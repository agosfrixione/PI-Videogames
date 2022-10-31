import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Card.css';

export default function Card({ image, name, genres, id }) {
    const params = useParams();
    return (
        <div key={params.id} className='cardContainer'>
            <Link className='imageContainer' to={`/videogame/${id}`}>
                <img className="imagenBandera" src={image} width="120" height="60" alt="image not fount" />
            </Link>
            <div className='textContainer'>
                    <h3 className='text'>{name}</h3>
                    <h4 className='subText'> {genres}</h4>
                    <Link className="btnCountry" to={`/videogame/${id}`}>
                        <button className="buttonCountry">More</button>
                    </Link>
            </div>
        </div>
    );
};