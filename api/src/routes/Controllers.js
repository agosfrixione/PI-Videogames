const axios = require('axios');
const {Videogame, Genres} = require('../db.js')
const { APIKEY } = process.env;

// Petición de los 100 videojuegos de la API
const infoApi = async() => {
    let url = `https://api.rawg.io/api/games?key=${APIKEY}`
    let videojuegos = []
    try {
        for(let i=0; i<5; i++) { //con un for recorro mi API, ya que es un arreglo, 5 veces
            const respuesta = await axios.get(url) //realizo la peticion
            //en mi .data podemos encontrar dos propiedades, results que es es aquello que voy a mapear
            respuesta.data.results.map(v => { //a la respuesta/resultado lo mapeo
                videojuegos.push({ //y pusheo en mi array vacio todo aquello que mapee
                    id: v.id,
                    name: v.name,
                    image: v.background_image,
                    rating: v.rating,
                    platforms: v.platforms?.map(el => el.platform.name),
                    genres: v.genres?.map(el => el.name)
                })
            });
            //y next que es donde voy a entrar para pasar a la siguente pagina.
            url = respuesta.data.next
        }
        return videojuegos

    } catch(e) {
        console.log(e)
    }
};

//A MI DB
const infoDB = async () => {
    try {
    return await Videogame.findAll({ //SELECT * FROM Videogame 
           include: [{
               model: Genres, 
               atributes: ['name'], 
               throught: { 
                   attributes: [] 
               }
           }]
       })
    } catch(e) {
        console.error(e)
    }
}

// Uno las dos peticiones
const infoTotal = async () => {
    //para unir las dos peticiones, guardo en una variable la ejecucion de mis funciones
    const apiData = await infoApi();
    const dbData = await infoDB();
    //ahora uno mis dos constantes contenedoras de funciones
    const infoCompleta = dbData.concat(apiData)
    return infoCompleta
}
//*************************************************************************** */

// Petición para mis request por Query
const nameApi = async (name) => {
    const infoSearch = await infoTotal().filter(b=> b.name.toLowerCase().includes(name.toLowerCase()));

    try {
        if (infoSearch.length>0) res.json(infoSearch);
            if(infoSearch.length<1) res.send([{
                name: 'The videogame is not in our database, you can creat it in "Create videogame"', id: '', image: 'https://thumbs.dreamstime.com/b/perro-con-una-lupa-75331469.jpg'
            }]);
    }catch(e) {
        console.error(e)
    }
}
//************************************************************************************************** */

// Petición para mis request por Params
//A MI ENDPOINT: https://api.rawg.io/api/games/{id}
const idApi = async (id) => {
    try {
        const rtaApi = await axios.get(`https://api.rawg.io/api/games/${id}?key=${APIKEY}`)
        if(rtaApi) {
            const vgId = await rtaApi.data
            const info = {
                id: vgId.id,
                name: vgId.name,
                image: vgId.background_image,
                genres: vgId.genres?.map(g => g.name),
                description: vgId.description,
                released: vgId.released,
                rating: vgId.rating,
                platforms: vgId.platforms?.map(el => el.platform.name)

            }
            return info
        } else {
            return("No hay un videojuego con ese id")
        }

    } catch(e) {
        console.error(e)
    }
}

//A mi DB
const idDb = async (id) => {
    try {
    const rtaDb = await Videogame.findByPk(id, {
        include: [{
            model: Genres, 
            atributes: ['name'], 
            throught: { 
                attributes: [] 
            }
        }]
       })
       if(rtaDb) {
        const info = {
            id: rtaDb.dataValues.id,
            name: rtaDb.dataValues.name,
            image: rtaDb.dataValues.image,
            genres: rtaDb.dataValues.genres.map(g => g.name),
            description: rtaDb.dataValues.description,
            released: rtaDb.dataValues.released,
            rating: rtaDb.dataValues.rating,
            platforms: rtaDb.dataValues.platforms

        }
        return info
    } else {
        return("No hay un videojuego con ese id")
    }
    } catch(e) {
        console.error(e)
    }
}

//UNO MIS DOS SOLICITUDES
const videogame = async (id) => {
    const dbID = id.includes("-")
    if(dbID) { //si mi id contiene un signo "-"
        const vgDb = await idDb(id);
        return vgDb     
    } else {
        const vgApi = await idApi(id);
        return vgApi
   }
};


// DELETE
const deleteVideogame = async function (id) {
    try {
      const videogame = await Videogame.findOne({
        where: { id: id },
      });
      if (!videogame) {
        return null;
      }
      await videogame.destroy();
      return videogame;
    } catch (error) {
      console.log (error);
    }
  };

module.exports = {
    infoTotal,
    videogame,
    infoApi,
    infoDB,
    nameApi,
    deleteVideogame
}
