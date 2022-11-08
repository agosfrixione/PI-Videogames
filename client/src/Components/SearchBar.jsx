import { useState } from "react";
import { useDispatch } from 'react-redux';
import s from './SearchBar.module.css';
import { useParams } from "react-router-dom";
// import { useSelector } from 'react-redux';
import { getByName, setCurrentPage, resetVideogames } from '../Actions/Index'

export default function SearchBar() {

    const params = useParams();
    const [search, setSearch] = useState('')
    const dispatch = useDispatch();


    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
        dispatch(getByName(e.target.value)); // cambia state.selectedVideogames
        dispatch(setCurrentPage(1));
    };

    function onSubmit(e) {
        e.preventDefault();
        setSearch('') //para limpiar mi busqueda
        dispatch(resetVideogames()); // al apretar search
    }

    return (
        <div key={params.id} className={s.container}>
                <input
                    className={s.inputs}
                    type='text'
                    name='videogame'
                    placeholder="Search Videogame"
                    value={search}
                    onChange={e => handleChange(e)}
                    onKeyPress={e=> e.key === 'Enter' && onSubmit(e)}
                />
                <button
                type='submit'
                onClick={e=> onSubmit(e)}
                className={s.buttons}
                >Clear</button>
        </div>

    );
}