import initialState from './InitialState.js';
import types from './Types.js';

export default reducer = (state = initialState, action) => {
    const {
        list_top_popularity,
        id_movie,
        uuid,
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

        case types.SEND_UUID: {
            return {
                ...state,
                uuid: payload
            }
        }

        case types.SEND_ROOT_NAVIGATION: {
            return {
                ...state,
                root_navigation: payload
            }
        }
        return state;
    }
}