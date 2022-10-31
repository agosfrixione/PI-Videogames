import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import './SearchBar.css';
import { useParams } from "react-router-dom";
// import { useSelector } from 'react-redux';
import { getByName, setCurrentPage, resetVideogames } from '../Actions/Index'

export default function SearchBar() {

    const params = useParams();
    const [search, setSearch] = useState('')
    const dispatch = useDispatch();
    // const selectedCountries = useSelector(state => state.selectedCountries)

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
        dispatch(getByName(e.target.value)); // cambia state.selectedVideogames
        dispatch(setCurrentPage(1));
    };

    function onSubmit(e) {
        e.preventDefault();
        const searchedName = getByName(e.target.value)
        dispatch(searchedName)
        dispatch(resetVideogames());
    }

    return (
        <div key={params.id} className="searchBarContainer">
                <input
                    className="inputSearch"
                    type='text'
                    name='videogame'
                    placeholder="Search Videogame"
                    value={search}
                    onChange={(e) => handleChange(e)}
                    onKeyPress={e=> e.key === 'Enter' && onSubmit(e)}
                />
            <Link to="/home">
                <button type='submit' onClick={e=> onSubmit(e)} className='btnSearch'>Search</button>
            </Link>
        </div>

    );
}