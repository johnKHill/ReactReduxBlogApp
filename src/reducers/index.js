import { combineReducers } from 'redux';
//NPM package for building FORMS...I'm renaming the reducer
import { reducer as formReducer } from 'redux-form';

import PostReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostReducer,
  form: formReducer
});

export default rootReducer;
