
import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
// AJAX getRequest to a URL
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
// Blog App API KEY
import API_Key from '../config/config';


export function fetchPosts() {
    // Making the axios request
    const request = axios.get(`${ROOT_URL}/posts${API_Key}`);

    return {
        type: FETCH_POSTS,
        // then assign the request to the payload property of the action that's being returned
        payload: request
    };
}