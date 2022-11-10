import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filterBySource, filterByGenres, orderByName, orderByRating, setCurrentPage, getGenres } from "../Actions/Index";
import SearchBar from "./SearchBar";
import s from './Header.module.css';
import { useParams } from 'react-router-dom';

export default function Header() {

    const params = useParams();
    const dispatch = useDispatch();
    const allGenres = useSelector((state) => state.allGenres)


    useEffect(() => { //
        dispatch(getGenres())
    }, [dispatch])

    function handleOrderRating(event) {
        event.preventDefault()
        dispatch(orderByRating(event.target.value));
        dispatch(setCurrentPage(1));
    }

    function handleOrderName(event) {
        event.preventDefault();
        dispatch(orderByName(event.target.value));
        dispatch(setCurrentPage(1));
    }

    function handleFilterSource(event) {
        event.preventDefault();
        dispatch(filterBySource(event.target.value));
        dispatch(setCurrentPage(1));
    }

    function handleFilterGenres(event) {
        dispatch(filterByGenres(event.target.value))
        dispatch(setCurrentPage(1));
    }

    return (
        <div key={params.id}>
            <SearchBar />
            <div className={s.header}>

                {/* ORDEN POR RATING */}
                <select onChange={event => handleOrderRating(event)} className={s.options} defaultValue={'default'}>
                    <option value={'default'} hidden>Sort by rating</option>
                    <option value="ASC">From higher to lower</option>
                    <option value="DESC">From lower to higher</option>
                </select>

                {/* ORDEN ALFABETICO POR NOMBRE  */}
                <select onChange={event => handleOrderName(event)} className={s.options} defaultValue={'default'}>
                    <option value={'default'} hidden>Sort by name</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>

                {/* FILTRO POR GENERO */}
                    <select onChange={event => handleFilterGenres(event)} className={s.options} defaultValue={'default'}>
                    <option value={'default'} hidden >Filter by genre</option>
                        <option value="All">All genres</option>
                        {allGenres && allGenres.map(g => (
                            <option key={g.id} value={g.name}>{g.name}</option>
                        ))}
                    </select>

                {/* FILTRO POR ORIGEN */}
                    <select onChange={event => handleFilterSource(event)} className={s.options} defaultValue={'default'}>
                    <option value={'default'} hidden >Filter by source</option>
                        <option value="All">All videogames</option>
                        <option value="Api">Api videogames</option>
                        <option value="Db">Database videogames</option>
                    </select>
            </div>
        </div>
    );
};