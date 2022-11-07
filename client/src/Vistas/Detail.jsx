import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail, resetDetail } from "../Actions/Index";
import { Link } from "react-router-dom";
import s from "./Detail.module.css";
import NavBar from '../Vistas/NavBar';

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
        <div className={s.detailContainer} >
            <NavBar/>
            <div className={s.containerMain}>
            <div
          className={s.containerImg}
          key={videogame.id}
          style={{
            backgroundImage: `url(${
              videogame.image ? videogame.image : videogame.background_image
            })`,
          }}
        >
                </div>
                <div className={s.containerTextDescrip}>
                    <div className={s.nameDiv}>
                        <h1>{videogame.name}</h1>
                        </div>
                        <div className={s.containerGenPlat}>
                        <p>Genres: {videogame.genres?.map(g => (g.name ? g.name : g)).join(", ")}.</p>
                        <p>Available for: {videogame.platforms?.join(', ')}.</p>
                        </div>
                    <div className={s.ratingAndReleased}>
                        <p>⭐ {videogame.rating}</p>
                        <p>Realeased date: {videogame.released}</p>
                        </div>
                        <div className={s.descriptionText}>
                            <p>
                                {videogame.description?.replace(/(<([^#$>]+)>)/gi, " ").replace(" ", " ")}
                                </p>
          </div>
                </div>
            </div>
            <Link to='/home' className={s.containerButton}>
                <button className={s.detailButton}>Back</button>
            </Link>
        </div>
    )
};