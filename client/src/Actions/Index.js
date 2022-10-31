import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_BY_NAME = 'GET_BY_NAME';
export const RESET_VIDEOGAMES = 'RESET_VIDEOGAMES';
export const GET_DETAIL = 'GET_DETAIL';
export const RESET_DETAIL = 'RESET_DETAIL';
export const GET_GENRES = 'GET_GENRES';
export const CREATE_VIDEOGAME = 'CREATE_VIDEOGAME';
export const SET_PAGE = 'SET_PAGE';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_RATING = 'ORDER_BY_RATING';
export const FILTER_BY_SOURCE = "FILTER_BY_SOURCE";
export const FILTER_BY_GENRES = "FILTER_BY_GENRES";
export const GET_PLATFORMS = 'GET_PLATFORMS';


export const getVideogames = () => {
    return async (dispatch) => {
      try {
        let response = await axios.get("http://localhost:3001/videogames");
        dispatch({
          type: "GET_VIDEOGAMES",
          payload: response.data,
        });
      } catch (err) {
        console.log(err);
      }
    };
  };

  export function getByName(name) {
    return function (dispatch) {
        try {
        dispatch({ type: GET_BY_NAME, payload: name })
        } catch (error) {
            console.log('Country could not be found')
        }
    };
};

export function resetVideogames() {
    return function (dispatch) {
        try {
            dispatch({ type: RESET_VIDEOGAMES })
        } catch (error) {
            console.log(error)
        }
    };
};

export function getDetail(id) {
    return function (dispatch) {
        axios.get(`http://localhost:3001/videogame/${id}`)
            .then(response => response.data)
            .then(response => {
                dispatch({ type: GET_DETAIL, payload: response })
            })
            .catch(error => console.log(error))
    };
};

export function resetDetail() {
    return function (dispatch) {
        try {
            dispatch({ type: RESET_DETAIL })
        } catch (error) {
            console.log(error)
        }
    }
};

export function getGenres() {
    return function (dispatch) {
        axios.get(`http://localhost:3001/genres`)
            .then(response => response.data)
            .then(response => {
                dispatch({ type: GET_GENRES, payload: response })
            })
            .catch(error => console.log(error))
    };
};

export function createVideogame(data) {
    return function (dispatch) {
        return axios.post(`http://localhost:3001/videogame`, data)
            .then(response => response.data)
            .then(response => {
                dispatch({ type: CREATE_VIDEOGAME, payload: response });
                alert('The videogame was created successfully')
                return true
            })
            .catch(error => {
                console.log(error);
                alert('Cannot create videogame. Error: ' + error.response.data)
                return false
            })
    }
};

export function setCurrentPage(page) {
    return { type: SET_PAGE, payload: page }
};

export function orderByName(payload) {
    return {
        type: ORDER_BY_NAME,
        payload
    }
};

export function orderByRating(payload) {
    return {
        type: ORDER_BY_RATING,
        payload
    }
};

  export const filterBySource = (payload) => {
    return {
      type: "FILTER_BY_SOURCE",
      payload,
    };
  };
  
  export const filterByGenres = (payload) => {
    return {
      type: "FILTER_BY_GENRES",
      payload,
    };
  };
  
  export const getPlatforms = () => {
    return async (dispatch) => {
        const url = await axios.get('http://localhost:3001/videogames/platforms')
        return dispatch({
            type: 'GET_PLATFORMS',
            payload: url.data
        })
    }
  };