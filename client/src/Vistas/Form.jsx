import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getGenres, getPlatforms, createVideogame } from "../Actions/Index";
import s from './Form.module.css';
import { useParams } from "react-router-dom";
import NavBar from '../Vistas/NavBar';

export default function Form(){
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory(); // Metodo de router que me redirige a la ruta que yo le diga

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

    const [errors, setErrors] = useState({});

    const [isSubmit, setisSubmit] = useState(true);



    function validation(input) {
        let errors = {}

        if(!input.name) {
          errors.name = "You need to provide a name";
        } else if (typeof input.name !== "string") {
          errors.name = "The name is not valid";
        } else if (input.name.length > 50) {
          errors.name = "The name is too long";
        }

        if(!/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(input.image)){
          errors.image= "invalid URL, must be an image(png, jpg, gif)";
        };

        if(!input.description) {
          errors.description = "You need to provide a description";
        } else if (input.description.length > 800) {
          errors.description = "The description is too long (Max = 800 characters)";
        }

        if(!input.released) {
          errors.released = "You need to provide a released date";
        } else if (input.released.length > 10 || !/^[0-9-]+$/.test(input.released)) {
          errors.released = "You need to provide a valid date (yyyy-mm-dd)"
        }

        if(!input.rating){
          errors.rating = "You need to provide a rating";
        } else if ( isNaN(input.rating) || input.rating < 1.0 || input.rating > 5) {
          errors.rating = "The rating must be a number between 1 and 5"
        }

        if ((Object.keys(errors).length) === 0){
            setisSubmit(false)
          };
        
        return errors;
    }

    function handleSubmit(e) {
        e.preventDefault();
    let noRepeat = allVideogames.filter(v => v.name === input.name);
    if(noRepeat.length) {
      alert('There is already a videogame with that name, please choose another one')
      errors.name = "There is already a videogame with that name";
    }else {
        if(!input.name || !input.genres.length || !input.platforms.length ){
          alert("Missing info")
      }else {
        dispatch(createVideogame(input))
        // console.log(input)
        alert("The videogame was created succesfully");
        setInput({
          name: "",
          image: "",
          description: "",
          released: "",
          rating: "",
          genres: [],
          platforms: [],
        }); // Reinicio el formulario
        history.push('/home')
      }
    }
}

      
    
      function handleChange(e) {
        e.preventDefault();
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value })); // e.target.name seria el input que se va a estar modificando
        setErrors(validation({                                              // voy a tomar el valor del input que se modifico y voy a ir llenando el estado
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
        <div className={s.mainContainer} key={params.id}>
           <NavBar/>
          <div className={s.subContainer} key={params.id}>
            <div className={s.firstContainerForm} key={params.id}>


        <div className={s.containerForm} key={params.id}>
          <h1 className={s.titulo}>Create your own videogame!</h1>

      <form onSubmit={e => handleSubmit(e)} className={s.form}>
          <div className={s.text} key={params.id}>
          <label>Name: </label>
            <input
              className={s.thisInput}
              type="text"
              required
              name="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
              /> <span className='barra'></span>
            {errors.name && (
              <p className={s.danger}>{errors.name}</p>
            )}
          </div>

          <div key={params.id}>
          <label>Description: </label>
            <textarea
              className={s.textArea}
              required
              type="text"
              name="description"
              value={input.description}
              onChange={(e) => handleChange(e)}
              > </textarea>
            {errors.description && (
              <p className={s.danger}>{errors.description}</p>
            )}
          </div>

          <div key={params.id}>
          <label>Released date: </label>
            <input
              className={s.thisInput}
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


          <div key={params.id}>
          <label>Rating: </label>
            <input
              className={s.thisInput}
              required
              type="text"
              name="rating"
              value={input.rating}
              onChange={(e) => handleChange(e)}
              /> <span className='barra'></span>
            {errors.rating && (
              <p className={s.danger}>{errors.rating}</p>
            )}
          </div>


          <div key={params.id}>
          <label>Image URL: </label>
            <input
              className={s.thisInput}
              type="text"
              name="image"
              value={input.image}
              onChange={(e) => handleChange(e)}
              /> <span className='barra'></span>
            {errors.image && (
              <p className={s.danger}>{errors.image}</p>
            )}
          </div>


          <div key={params.id}>
          <label>Platforms:  </label>
              <select className={s.thisInput} id="platforms" defaultValue="" onChange={(e) => handlePlatforms(e)}>
                  <option value="" disabled hidden>Select platforms...</option>
                  {platforms?.map(p => {
                    return (
                      <option value={p} key={p}>{p}</option>
                      );
                    })}
              </select>
              </div>
              <div className={s.selected}>

              {input.platforms.map((p) => (
                <div key={p}>
                  <p>{p}</p>
                  <button  
                  onClick={() => handleDeleteP(p)} 
                  key={p} 
                  id={p.id}
                  value={p}
                  >
                    <span>X</span>
                    </button>
                </div>
              ))}
          </div>


          <div key={params.id}>
          <label>Genres: </label>
            <select className={s.thisInput} id="genres" defaultValue="" onChange={(e) => handleGenres(e)}>
              <option value='' disabled hidden>Select genres...</option>
              {allGenres.map((g) => {
                return (
                  <option key={g.id} value={g.name}>{g.name}</option>
                  );
                })}
            </select>
            </div>
            <div className={s.selected}>
            {input.genres.map((g) => (
              <div key={g}>
                <p>{g}</p>
                <button 
                onClick={() => handleDeleteG(g)} 
                key={g} 
                id={g.id}
                value={g}
                >
                  <span>X</span>
                  </button>
              </div>
        ))}
          </div>

          
      <div className={s.formDiv} key={params.id}>
          <button type="submit" className={s.buttonForm}>CREATE</button>
      </div>
      </form>
      </div>
    </div>
    </div>
    </div>
  );
};