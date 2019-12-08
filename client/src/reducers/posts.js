import {
    LOAD_POSTS_SUCCESS,
    LOAD_POSTS_FAILED
} from '../actions/types'

const initialState = {
    posts: null,
    loading: true
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
                    posts: payload

            }
            default:
                return state
    }
}