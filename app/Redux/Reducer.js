import initialState from './InitialState.js';
import types from './Types.js';

export default reducer = (state = initialState, action) => {
    const {
        list_top_popularity,
        id_movie,
        user,
        root_navigation
    } = state;
    const {type, payload} = action;
    
    switch(type) {
        case types.ADD_LIST_TOP_POPULARITY: {
            return {
                ...state,
                list_top_popularity: payload
            }
        }

        case types.SEND_ID_MOVIE: {
            return {
                ...state,
                id_movie: payload
            }
        }

        case types.SEND_CURRENT_USER: {
            return {
                ...state,
                user: payload
            }
        }

        case types.SEND_ROOT_NAVIGATION: {
            return {
                ...state,
                root_navigation: payload
            }
        }
        case types.CLEAR_CURRENT_USER: {
            return {
                ...state,
                user: {} //delete all key and property in object user
            }
        }
        return state;
    }
}