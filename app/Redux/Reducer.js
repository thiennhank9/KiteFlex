import initialState from './InitialState.js';
import types from './Types.js';

export default reducer = (state = initialState, action) => {
    const {list_top_popularity} = state;
    const {type, payload} = action;
    
    switch(type) {
        case types.ADD_LIST_TOP_POPULARITY: {
            return {
                ...state,
                list_top_popularity: payload
            }
        }

        return state;
    }
}