import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVideogames, getGenres, createVideogame } from "../Actions/Index";
import './Form.css';
import { useParams } from "react-router-dom";

export default function Form(){
    const params = useParams();
    const allGenres = useSelector((state) => state.allGenres);
    const allVideogames = useSelector((state) => state.allVideogames);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres(), getVideogames())
    }, [dispatch])

    const [videogame, setVideogame] = useState({
        name:"",
        image:"",
        description:"",
        released:"",
        rating:"",
        genres:[],
        platforms:[]
    });

    const [formError, setFormError] = useState({name:false, weightMin:false, weightMax:false, heightMin:false, heightMax:false, life_span:false});

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

    function validWeight(str){
        if(str.length < 1 || str.length > 10) return true;
        if(typeof str !== "string") return true;
        return false;
    }

    function validHeight(str){
        if(str.length < 1 || str.length > 5) return true;
        if(typeof str !== "string") return true;
        return false;
    }


    function validLife(str){
        if(str.length < 1 || typeof str !== "string") return true;
        return false;
    }
    
    function longLife(str){
        if(str.length > 5) return true;
        return false;
    }

    function validation(data) {
        let errors = {}

        if(exists(data.name) === true) errors.name = "You need to provide a breed name";

        if(exists(data.weightMin) === true) errors.weightMin = "You need to provide a minimum weight";

        if(exists(data.weightMax) === true) errors.weightMax = "You need to provide a maximum weight";

        if(validName(data.name) === true) errors.name = "The name is not valid";

        if(validWeight(data.weightMax) === true) errors.weightMax = "The weight is not valid";

        if(validWeight(data.weightMin) === true) errors.weightMin = "The weight is not valid";

        if(validHeight(data.heightMin) === true) errors.heightMin = "The height is not valid";

        if(validHeight(data.heightMax) === true) errors.heightMax = "The height is not valid";

        if(parseInt(data.highMin)>parseInt(data.highMax)) errors.heightMin = "The maximum height cannot be minor than the minimum height"
        
        if(parseInt(data.highMin)>parseInt(data.highMax)) errors.heightMax = "The maximum height cannot be minor than the minimum height"

        if(validLife(data.life_span) === true) errors.life_span = "The life span is not valid";
        
        if(longLife(data.life_span) === true) errors.life_span = "We would love that they stay with us forever but sadly we must enjoy them while they're here";

        if ((Object.keys(errors).length) === 0){
            setisSubmit(false)
          };
        
        return errors;
    }

    let handleChange = (e) =>{
        setDog({
            ...dog,
            [e.target.name] : e.target.value //Los [] son para establecer una variable como propiedad.
        });

        setFormError(validation(dog));
    }

    let handleSubmit = async (e) =>{
        e.preventDefault()
        setFormError(validation(dog))
        dispatch(postDog(dog))
        console.log(dog);
        setDog({
            name:"",
            image:"",
            weightMin:"",
            weightMax:"",
            heightMin:"",
            heightMax:"",
            life_span:"",
            temperament:[]
        }); //Reinicio el formulario
        alert("La raza ya fué creada")
    }

    let handleTemperament = (e) =>{
        setDog({
            ...dog,
            temperament: [...new Set([...dog.temperament, e.target.value])] //con el set se borran elementos repetidos.
        })

        console.log("Handle temperaments:", dog.temperament )
    }

    return(
        <div key={params.id} className="formContainer">
            <div className="textTitle">
                <h2>Creat your own dog!</h2>
            </div>
            
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <div className="container">
                    <label>Breed</label>
                    <input name={'name'} value={dog.name}
                    onChange={(e) => handleChange(e)}></input>
                    {
                        formError.name ? (<h4 className="error"><small>{formError.name}</small></h4>) : false
                    }
                </div>

                <div className="container">
                    <label>Imagen</label>
                    <input  name={'image'} value={dog.image}
                    onChange={(e) => handleChange(e)}></input>
                    {
                        formError.image ? (<h4 className="error"><small>{formError.image}</small></h4>) : false
                    }
                </div>

                <div className="container">
                    <label>Minimum weight <small>(Please enter a single number)</small></label>
                    <input  name={'weightMin'} value={dog.weightMin}
                    onChange={(e) => handleChange(e)}></input>
                    {
                        formError.weightMin ? (<h4 className="error"><small>{formError.weightMin}</small></h4>) : false
                    }
                </div>

                <div className="container">
                    <label>Maximum weight <small>(Please enter a single number)</small></label>
                    <input name={'weightMax'} value={dog.weightMax}
                    onChange={(e) => handleChange(e)}></input>
                    <div className="errorContainer">
                    {
                        formError.weightMax ? (<h4 className="error"><small>{formError.weightMax}</small></h4>) : false
                    }
                    </div>
                </div>

                <div className="container">
                    <label>Minimum height <small>(Please enter a single number)</small></label>
                    <input name={'heightMin'} value={dog.heightMin}
                    onChange={(e) => handleChange(e)}></input>
                    {
                        formError.heightMin ? (<h4 className="error"><small>{formError.heightMin}</small></h4>) : false
                    }
                </div>

                <div className="container">
                    <label>Maximum height <small>(Please enter a single number)</small></label>
                    <input name={'heightMax'} value={dog.heightMax}
                    onChange={(e) => handleChange(e)}></input>
                    {
                        formError.heightMax ? (<h4 className="error"><small>{formError.heightMax}</small></h4>) : false
                    }
                </div>

                <div className="container">
                    <label>Life span</label>
                    <input name={'life_span'} value={dog.life_span}
                    onChange={(e) => handleChange(e)}></input>
                    {
                        formError.life_span ? (<h4 className="error"><small>{formError.life_span}</small></h4>) : false
                    }
                </div>

                <div className="container">
                    <label>Temperament 1</label>
                    <select name={'temperaments'}
                      onChange={(e) => handleTemperament(e)}>
                        <option value="selected" hidden >Choose a temperament</option>
                       {
                            temperamentsState?.map(t=>{
                               return (
                                   <option key={t.id} value={t.name}>{t.name}</option>
                               );
                            })
                        }
                     </select>
                </div>

                <div className="container">
                    <label>Temperament 2</label>
                    <select name={'temperaments'}
                      onChange={(e) => handleTemperament(e)}>
                      <option value="selected" hidden >Choose a temperament</option>
                       {
                            temperamentsState?.map(t=>{
                               return (
                                   <option key={t.id} value={t.name}>{t.name}</option>
                               );
                            })
                        }
                     </select>
                </div>

                <div className="container">
                    <label>Temperament 3</label>
                    <select name={'temperaments'}
                      onChange={(e) => handleTemperament(e)}>
                      <option value="selected" hidden >Choose a temperament</option>
                       {
                            temperamentsState?.map(t=>{
                               return (
                                   <option key={t.id} value={t.name}>{t.name}</option>
                               );
                            })
                        }
                     </select>
                </div>

                <div>
                    <button className="btn" type="submit" value="submit" id="btn" disabled={isSubmit}> Create dog </button>
                </div>

            </form>
        </div>
    )
}