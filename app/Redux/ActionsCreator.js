import types from './Types.js';

export default actionCreators = {
    add_list_top_popularity: (list_top_popularity) => {
        return {
            type: types.ADD_LIST_TOP_POPULARITY,
            payload: list_top_popularity
        }
    }
}