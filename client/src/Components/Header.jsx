import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filterBySource, filterByGenres, orderByName, orderByRating, setCurrentPage } from "../Actions/Index";
import SearchBar from "./SearchBar";
import './Header.css';

export default function Header() {

    const dispatch = useDispatch();
    const allGenres = useSelector((state) => state.allGenres)

    const genres = [];
    allGenres.map(
        a => !genres.includes(a.name) && genres.push(a.name)
    );

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
        <div className="headerDiv">
            <div className="selectGap">

                {/* ORDEN POR RATING */}
                <select onChange={event => handleOrderRating(event)} className="select" defaultValue={'default'}>
                    <option value={'default'} hidden>Sort by rating</option>
                    <option value="ASC">From higher to lower</option>
                    <option value="DESC">From lower to higher</option>
                </select>

                {/* ORDEN ALFABETICO POR NOMBRE  */}
                <select onChange={event => handleOrderName(event)} className="select" defaultValue={'default'}>
                    <option value={'default'} hidden>Sort by name</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>

                {/* FILTRO POR GENERO */}
                <div>
                    <select onChange={event => handleFilterGenres(event)} className="select" defaultValue={'default'}>
                    <option value={'default'} hidden >Filter by genre</option>
                        <option value="All">All genres</option>
                        {genres && genres.map((genre, idx) => (
                            <option key={idx} value={genre}>{genre}</option>
                        ))}
                    </select>
                </div>

                {/* FILTRO POR ORIGEN */}
                <div>
                    <select onChange={event => handleFilterSource(event)} className="select" defaultValue={'default'}>
                    <option value={'default'} hidden >Filter by source</option>
                        <option value="All">All videogames</option>
                        <option value="Api">Api videogames</option>
                        <option value="Db">Database videogames</option>
                    </select>
                </div>
            </div>
            <SearchBar />
        </div>
    );
};