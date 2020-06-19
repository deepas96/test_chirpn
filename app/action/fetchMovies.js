import { FETCHING_MOVIES, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from '../constants';

export function fetchMovies() {

    return (dispatch) => {
        dispatch(getMovies())
        return(fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=68e82445c8842ba8616d0f6bf0e97a41'))
        .then(res => res.json())
        .then(json => {
          let data = json.genres
          console.log("response", data)
            dispatch(getMoviesSuccess(data))
        })
        .catch(err => {          
          console.log("response", err)
        dispatch(getMoviesFailure(err))})
    }
}

function getMovies() {
    return {
        type: FETCHING_MOVIES
    }
}

function getMoviesSuccess(data) {
    return {
        type: FETCH_MOVIES_SUCCESS,
        data
    }
}

function getMoviesFailure() {
    return {
        type: FETCH_MOVIES_FAILURE
    }
}
