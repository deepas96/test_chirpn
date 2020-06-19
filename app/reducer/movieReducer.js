import { FETCHING_MOVIES, FETCH_MOVIES_FAILURE, FETCH_MOVIES_SUCCESS } from '../constants';

  
  // Initial state of the store
  export const initialState = {
    movies: [],
    isFetching: false,
    error: false

  }

  // Function to handle actions and update the state of the store.
  export default function moviesReducer(state = initialState, action) {

    switch(action.type) {
        case FETCHING_MOVIES:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                movies: action.data
            }
        case FETCH_MOVIES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}
