import React, { useState, useEffect } from "react";
import {Link, useHistory} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getVideogames, getGenres, getPlatforms, createVideogame } from "../Actions/Index";
import './Form.css';
import { useParams } from "react-router-dom";
import NavBar from '../Vistas/NavBar';

export default function Form(){
    const params = useParams();
    const dispatch = useDispatch();

    const allGenres = useSelector((state) => state.allGenres);
    const platforms = useSelector((state) => state.platforms);
    const allVideogames = useSelector((state) => state.allVideogames);

    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms())
      }, [dispatch])

    const [input, setInput] = useState({
        name:"",
        image:"",
        description:"",
        released:"",
        rating:"",
        genres:[],
        platforms:[]
    });

    const [errors, setErrors] = useState({name:false, description:false, released:false, rating:false});

    const [isSubmit, setisSubmit] = useState(true);

    function exists(str){
        if (!str) return true;
        return false;
    }

    function validName(str){
        if(str.length < 1 || str.length > 30) return true;
        if(typeof str !== "string") return true;
        return false;
    }

    function validDescriptionMin(str){
        if(str.length < 1) return true;
        if(typeof str !== "string") return true;
        return false;
    }

    function validDescriptionMax(str){
        if(str.length > 140) return true;
        if(typeof str !== "string") return true;
        return false;
    }


    function validRating(str){
        if(str.length < 1 || str.length > 5 || typeof str !== "number") return true;
        return false;
    }

    function validation(input) {
        let errors = {}

        if(exists(input.name) === true) errors.name = "You need to provide a name";

        if(exists(input.description) === true) errors.description = "You need to provide a description";

        if(exists(input.released) === true) errors.released = "You need to provide a released date";

        if(exists(input.rating) === true) errors.rating = "You need to provide a rating";

        if(validName(input.name) === true) errors.name = "The name is not valid";

        if(validDescriptionMin(input.description) === true) errors.description = "You need to provide a valid description";

        if(validDescriptionMax(input.description) === true) errors.description = "The description must have up to 140 characters";

        if(validRating(input.rating) === true) errors.rating = "The rating must be a number between 1 and 5";

        if ((Object.keys(errors).length) === 0){
            setisSubmit(false)
          };
        
        return errors;
    }

    function handleSubmit(e) {
        e.preventDefault();
    let noRepeat = allVideogames.filter(v => v.name === input.name)
    if(noRepeat.length !== 0) {
      alert('There is already a videogame with that name, please choose another one')
    }else {
        setErrors(validation(input))
        dispatch(createVideogame(input))
        setInput({
          name: "",
          image: "",
          description: "",
          released: "",
          rating: "",
          genres: [],
          platforms: [],
        }); // Reinicio el formulario
        alert("The videogame was created succesfully");
    }
}

      
    
      function handleChange(e) {
        e.preventDefault();
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setErrors(validation({
          ...input,
          [e.target.name]: [e.target.value]
        })
        )
      }
    
      function handleGenres(e) {
        if(!input.genres.includes(e.target.value)) {
          setInput({
            ...input,
            genres: [...input.genres, e.target.value],
          })
        }
      }
    
      function handlePlatforms(e) {
        if(!input.platforms.includes(e.target.value)) {
          setInput({
            ...input,
            platforms: [...input.platforms, e.target.value]
          })
        }
      }
    
      function handleDeleteG(e) {
        setInput({
          ...input,
          genres: input.genres.filter((gen) => gen !== e)
        });
      }
    
      function handleDeleteP(e) {
        setInput({
          ...input,
          platforms: input.platforms.filter((plat) => plat !== e)
        });
      }
    

    return(
        <div>
        <NavBar/>
      <form onSubmit={(e) => handleSubmit(e)} className='form'>
        <div className='form'>
          <h2 className='titulo'>Create your own videogame!</h2>

          <div className='grupo'>
          <label className='label'>Name: </label>
            <input
              className='input'
              type="text"
              required
              name="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
              /> <span className='barra'></span>
            {errors.name && (
              <p className='danger'>{errors.name}</p>
            )}
          </div>


          <div className='grupo'>
          <label className='label'>Image URL: </label>
            <input
            className='input'
              type="text"
              name="image"
              value={input.image}
              onChange={(e) => handleChange(e)}
              /> <span className='barra'></span>
            {errors.image && (
              <p className='danger'>{errors.image}</p>
            )}
          </div>


          <div className='grupo'>
          <label className='label'>Released date: </label>
            <input
            className='input'
              required
              type='date'
              name="released"
              value={input.released}
              placeholder='yyyy-mm-dd'
              onChange={(e) => handleChange(e)}
              /> <span className='barra'></span>
            {errors.released && (
              <p className='danger'>{errors.released}</p>
            )}

          </div>

          <div className='grupo'>
          <label className='label'>Rating: </label>
            <input
            className='input'
              required
              type="text"
              name="rating"
              value={input.rating}
              onChange={(e) => handleChange(e)}
              /> <span className='barra'></span>
            {errors.rating && (
              <p className='danger'>{errors.rating}</p>
            )}
          </div>


          <div className='grupo'>
          <label className='label'>Genres: </label>
            <select className='create' id="genres" defaultValue="" onChange={(e) => handleGenres(e)}>
              <option className='option_create' value='' disabled hidden>Select genres...</option>
              {allGenres.map((g) => {
                return (
                  <option className='option_create' key={g.id} value={g.name}>{g.name}</option>
                  );
                })}
            </select> <span className='barra'></span>
            {input.genres.map((g) => (
              <div className='box_opcion'>
                <div className='opcion_title'>{g}</div>
                <button className='btn_remove' onClick={() => handleDeleteG(g)} key={g} value={g}><span className='x'>X</span></button>
              </div>
        ))}
          </div>


          <div className='grupo'>
          <label className='label'>Platforms:  </label>
              <select className='select_create' id="platforms" defaultValue="" onChange={(e) => handlePlatforms(e)}>
                  <option className='option_create' value="" disabled hidden>Select platforms...</option>
                  {platforms?.map(p => {
                    return (
                      <option className='option_create' value={p} key={p}>{p}</option>
                      );
                    })}
              </select> <span className='barra'></span>
              {input.platforms.map((p) => (
                <div className='box_opcion'>
                  <div className='opcion_title'>{p}</div>
                  <button className='btn_remove' onClick={() => handleDeleteP(p)} key={p} value={p}><span className='x'>X</span></button>
                </div>
              ))}
          </div>

          <div className='grupo'>
          <label className='description'>Description: </label>
            <textarea
              required
              type="text"
              name="description"
              value={input.description}
              onChange={(e) => handleChange(e)}
              > </textarea>
            {errors.description && (
              <p className='danger'>{errors.description}</p>
            )}
          </div>
      </div>
      <div>
          <button type="submit" className='btn_submit'>CREATE</button>
      </div>
      </form>

    </div>
  );
};