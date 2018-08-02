import axios from 'axios';

//Exporting the ActionCreators
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
// AJAX getRequest to a URL
const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
// Blog App API KEY
import API_Key from '../config/config';


// ActionCreator 1 -> get all posts
export function fetchPosts() {
    // Making the axios request
    const request = axios.get(`${ROOT_URL}/posts${API_Key}`);

    return {
        type: FETCH_POSTS,
        // then assign the request to the payload property of the action that's being returned
        payload: request
    };
}


// ActionCreator 2 -> create a new post
export function createPost(values, callback) {
    // Making the axios request
    const request = axios.post(`${ROOT_URL}/posts${API_Key}`, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        // then assign the request to the payload property of the action that's being returned
        payload: request
    }
}


// ActionCreator 3 -> get/retrieve a *specific* post
export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_Key}`);

    return {
        type: FETCH_POST,
        payload: request
    }
}