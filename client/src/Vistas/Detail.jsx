import "./Detail.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail, resetDetail } from "../Actions/Index";
import { Link } from "react-router-dom";

export default function Detail() {

    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getDetail(id));

        return () => {
            dispatch(resetDetail())
        };

    }, [dispatch, id]);

    const videogame = useSelector((state) => state.videogameDetail)

    return (
        <div className='country' >
            <div className='detail'>
                <h2>{videogame.name}</h2>
                <img className='image'
                    src={videogame.image}
                    alt="image not found" />
                <div className='info'>
                    <div>{videogame.name}</div>
                    <div>⭐ {videogame.rating}</div>
                    <div>{videogame.genres?.map(g => (g.name ? g.name : g)).join(" | ")}</div>
                    <div>📅 {videogame.released}</div>
                    <hr />
                    <div className='description'>{<p dangerouslySetInnerHTML={{__html: videogame.description}}></p>}</div>
                    <div className='plataformas'>🎮 Available for: {videogame.platforms?.join(', ')}.</div>
                </div>
            </div>
            <Link to='/home'>
                <button className='button'>Back</button>
            </Link>
        </div>
    )
};