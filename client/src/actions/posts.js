import axios from 'axios'
import {
    LOAD_POSTS_SUCCESS,
    LOAD_POSTS_FAILED
} from "./types"



export const loadPosts = (email) => async dispatch => {

    try {
        const res = await axios.get('http://localhost:4000/api/posts', {
            params: {
                email: email
            }
        })
        dispatch({
            type: LOAD_POSTS_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        console.log(err)
        dispatch({
            type: LOAD_POSTS_FAILED
        })
    }

}