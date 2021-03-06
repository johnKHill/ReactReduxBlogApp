import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// Libraries in react-router-dom for navigation
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Library
import promise from 'redux-promise';

import reducers from './reducers';

// Route Components
import PostIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

/*This is for Redux Dev Tool -> fix this later*/
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


// <Provider store={createStoreWithMiddleware(reducers)}>

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/posts/new" component={PostsNew} />
                <Route path="/posts/:id" component={PostsShow} />
                <Route path="/" component={PostIndex} /> 
            </Switch>
        </div>
    </BrowserRouter>
</Provider>
, document.querySelector('.container'));
