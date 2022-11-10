const { Router } = require('express');
const axios = require('axios');
const {infoTotal, infoApi, infoDB, nameApi, videogame, deleteVideogame} = require('./Controllers')
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
            allResults.length ? res.status(200).send(allResults.slice(0,15)) : res.status(400).send('There is no videogame with that name')

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
    const {name, description, released, rating, platforms, genres} = req.body;
    let {image} = req.body;

    if (!name || !description || !platforms) {
        return res.status(400).json({msg: "Missing information"})
    }
    if(typeof name !== "string" || typeof description !== "string" || typeof released !== "string" || isNaN(rating)){
        return res.status(400).json({msg: "Some of the data was not entered correctly"})
    }
    try {
        if (image === '' || !image) {
            image = 'https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/vy4irqhlnzay3yeybfc0/best-sports-video-games?fimg-ssr-default'
        } 
        const newVideogame = await Videogame.create({ name, description , released, rating, platforms, image })
        let genr = await Genres.findAll({
            where: { name: genres }})
        
        await newVideogame.addGenre(genr);
        res.status(200).send('Videogame created successfully');
        // console.log(newVideogame)
    }catch(e){
        console.log(e)
    }
})

router.get('/genres', async (req, res, next) => {
    try {
        const respuesta = await axios.get(`https://api.rawg.io/api/genres?key=${APIKEY}`)
        const genresApi = await respuesta.data.results.map(g => g.name)
        //console.log('estos son los generos: ', genresApi)

        genresApi.map(e => Genres.findOrCreate({ //lo uso para guardar los generos que me traje de la API en la base de datos
            where: {name: e} //
        }))

        const allGenres = await Genres.findAll() //me traigo todos los generos que guarde en mi db
        res.json(allGenres)

    }catch(e) {
        next(e)
    }
})

router.get('/platforms', async (req, res, next) => {
        
    try {
        const all = await infoApi();
        const allPlatforms = [];
        all.map(g => g.platforms.map(p => {
            if(!allPlatforms.includes(p)) {
                allPlatforms.push(p)
            }
        }))
    
        allPlatforms.length ? res.status(200).json(allPlatforms) : res.status(404).send('Error')

        }catch(e) {
            next(e)
        }
    })


router.delete('/videogame/:id', async (req, res) => {
    const { id } = req.params;
    console.log(id)
    const deleted = await deleteVideogame(id)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return error;
      });
    if (deleted === null) {
      return res
        .status(404)
        .json({ message: 'The videogame could not be deleted' });
    }
    res.status(200).json({ message: 'The videogame was succesfully deleted' });
});


module.exports = router;
