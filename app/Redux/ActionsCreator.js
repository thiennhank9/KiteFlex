import types from './Types.js';

export default actionCreators = {
    add_list_top_popularity: (list_top_popularity) => {
        return {
            type: types.ADD_LIST_TOP_POPULARITY,
            payload: list_top_popularity
        }
    },
    send_id_movie: (id_movie) => {
        return {
            type: types.SEND_ID_MOVIE,
            payload: id_movie
        }
    },
    send_current_user: (user) => {
        return {
            type: types.SEND_CURRENT_USER,
            payload: user
        }
    },
    clear_current_user: () => {
        return {
            type: types.CLEAR_CURRENT_USER,
            payload: {}
        }
    },
    send_root_navigation: (navigation) => {
        return {
            type: types.SEND_ROOT_NAVIGATION,
            payload: navigation
        }
    }
}