import _ from 'lodash';

// Importing the ActionCreator from actions
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {

    case DELETE_POST:
        return _.omit(state, action.payload);

    case FETCH_POST:
        return { ...state, [action.payload.data.id] : action.payload.data }; // same as the commented code above
        
    case FETCH_POSTS:
        // _.mapKeys helper from lodash, treats the state object as an object rather than an array-> makes this straight forward
        return _.mapKeys(action.payload.data, 'id');

    default:
        return state;
    }
}