const { Router } = require('express');
const axios = require('axios');
const {infoTotal, infoDB, nameApi, videogame} = require('./Controllers')
const { Videogame, Genres } = require('../db.js');
const { APIKEY } = process.env;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/videogames', async (req, res, next) => {
    const { name } = req.query; // El nombre me llega por query
    let allVideogames = await infoTotal()

    if(name) { 
        try { 
            const foundGamesAPI = await nameApi(name)
            const gamesByNameDB = await infoDB()
            let foundGamesDB =  gamesByNameDB.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
            let allResults = foundGamesDB.concat(foundGamesAPI)
            allResults.length ? res.status(200).send(allResults.slice(0,15)) : res.status(400).send('No hay un videojuego con dicho nombre')

        } catch(e) {
            next(e)
        }
    }
    else {
        res.send(allVideogames)
        return
    }
    })

router.get('/videogame/:id', async (req, res, next) => {
    const {id} = req.params;
    const vg = await videogame(id);

    try {
        res.send(vg)
    }catch(e){
        res.status(400).json({ msg: 'Missing ID'})
    }
})

router.post('/videogames', async (req, res) => {
    const {name, description, released, rating, platforms, genre} = req.body;
    let {image} = req.body;

    if (!name || !description || !platforms) {
        return res.status(400).json({msg: "Missing information"})
    }
    if(typeof name !== "string" || typeof description !== "string" || typeof released !== "string" || typeof rating !== "number" || typeof platforms !== "string"){
        return res.status(400).json({msg: "Some of the data was not entered correctly"})
    }
    try {
        if (image === '' || !image) {
            image = 'file:///Users/agosfrixione/Desktop/Henry/PI-Videogames-main/24509700.jpg'
        } 
        const newVideogame = await Videogame.create({ name, description , released, rating, platforms, image })
        let genr = await Genres.findAll({
            where: { name: genre }})
        
        await newVideogame.addGenre(genr);
        res.status(200).send('Videogame created successfully');
    }catch(e){
        console.log(e)
    }
})

router.get('/genres', async (req, res) => {
    try {
        const genresApi = await axios.get(`https://api.rawg.io/api/genres?key=${APIKEY}`)
        const mapGenresApi = await genresApi.data.results.map(g => g.name)
        //console.log('estos son los generos: ', genresApi)

        mapGenresApi.forEach(g => Genres.findOrCreate({ //lo uso para guardar los generos que me traje de la API en la base de datos
            where: {name: g} //
        }))

        const allGenres = await Genres.findAll() //me traigo todos los generos que guarde en mi db
        res.json(allGenres)

    }catch(e) {
        next(e)
    }
})


module.exports = router;
