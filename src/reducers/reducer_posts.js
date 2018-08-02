import _ from 'lodash';

// Importing the ActionCreator from actions
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
    case FETCH_POST:
        // const post = action.payload.data;
        // const newState { ...state  };
        // newState[post.id] = post;
        // return newState;
        return { ...state, [action.payload.data.id] : action.payload.data }; // same as the commented code above
    case FETCH_POSTS:
        return _.mapKeys(action.payload.data, 'id');
    default:
        return state;
    }
}