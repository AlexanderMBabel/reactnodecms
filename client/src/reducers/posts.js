import {
    LOAD_POSTS_SUCCESS,
    LOAD_POSTS_FAILED
} from '../actions/types'



const initialState = {
    posts: null,
    loading: true,
    alert: ''
}

export default function (state = initialState, action) {
    const {
        type,
        payload
    } = action

    switch (type) {
        case LOAD_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                    posts: payload,
                    alert: 'post success'

            }
            case LOAD_POSTS_FAILED:
                return {
                    ...state,
                    posts: null,
                        alert: 'post failed'
                }
                default:
                    return state
    }
}