import { 
    GET_VIDEOGAMES,
    GET_BY_NAME,
    RESET_VIDEOGAMES,
    GET_DETAIL,
    RESET_DETAIL,
    GET_GENRES,
    CREATE_VIDEOGAME,
    SET_PAGE,
    ORDER_BY_NAME,
    ORDER_BY_RATING,
    FILTER_BY_SOURCE,
    FILTER_BY_GENRES,
    GET_PLATFORMS
} from "../Actions/Index"; 

let initialState = {
    allVideogames: [],
    selectedVideogames: [],
    videogameDetail: {},
    allGenres: [],
    source: 'All',
    genre: 'All',
    currentPage: 1
};

export default function rootReducer(state= initialState, action){
    const allVideogames = state.allVideogames;

    switch (action.type) {
        
        case GET_VIDEOGAMES: {
            return {
                ...state,
                allVideogames: action.payload,
                selectedVideogames: action.payload
            }
        };

        case GET_BY_NAME: {
            const filteredVideogames = allVideogames.filter(c => c.name.toLowerCase().includes(action.payload.toLowerCase()))

            return {
                ...state,
                selectedVideogames: filteredVideogames
            }
        };

        case RESET_VIDEOGAMES: {
            return {
                ...state,
                selectedVideogames: state.allVideogames
            }
        };

        case GET_DETAIL: {
            return {
                ...state,
                videogameDetail: action.payload,
            }
        };

        case RESET_DETAIL: {
            return {
                ...state,
                videogameDetail: initialState.videogameDetail
            }
        };

        case GET_GENRES: {
            return {
                ...state,
                allGenres: action.payload,
            }
        };

        case CREATE_VIDEOGAME: {
            return {
                ...state,
            }
        };

        case ORDER_BY_NAME: {
            let sortedVideogames = [];
            if (action.payload === 'A-Z') {
                sortedVideogames = [...state.allVideogames].sort((a, b) => a.name.localeCompare(b.name))
            }
            if (action.payload === 'Z-A') {
                sortedVideogames = [...state.allVideogames].sort((a, b) => b.name.localeCompare(a.name));
            }
            return {
                ...state,
                allVideogames: sortedVideogames
            }
        }

        case ORDER_BY_RATING: {
            let sortedVideogames = [];
            if (action.payload === 'ASC') {
                sortedVideogames = [...state.allVideogames].sort((a, b) => a.rating - b.rating)
            }
            if (action.payload === 'DESC') {
                sortedVideogames = [...state.allVideogames].sort((a, b) => b.rating - a.rating);
            }
            return {
                ...state,
                allVideogames: sortedVideogames
            }
        };

        case FILTER_BY_SOURCE: { // No funca todavia
            let filteredVideogames = [];
            const filteredByGenre = state.genre === 'All' ?
                allVideogames
                : allVideogames.filter((c) => c.genres.name.map((ac) => ac.name).includes(state.genre));

            if (action.payload === 'db') {
                filteredVideogames = filteredByGenre.filter(v => isNaN(v.id))
            }else if (action.payload === 'api') {
                filteredVideogames = filteredByGenre.filter(v => typeof(v.id) === 'number')
            }else {
                filteredVideogames = filteredByGenre
            }

            return {
                ...state,
                allVideogames: filteredVideogames,
                source: action.payload
            }
        };

        case FILTER_BY_GENRES: { // No funca todavia 
            const filteredBySource = state.source === 'All' ?
                allVideogames :
                allVideogames.filter(v => v.source === state.source);

            const filteredVideogames = action.payload === 'All' && filteredBySource.length ?
                filteredBySource :
                filteredBySource.filter((c) => c.genres.name.map((ac) => ac.name).includes(action.payload));
            return {
                ...state,
                selectedVideogames: filteredVideogames,
                genre: action.payload
            }
        };

        case SET_PAGE:
            return {
                ...state,
                currentPage: action.payload
            };

        case GET_PLATFORMS:
            return {
                ...state,
                platforms: [...action.payload]
            };

        default: return state;
    }

    
};