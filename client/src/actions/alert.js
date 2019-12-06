import {
    SET_ALERT,
    REMOVE_ALERT
} from './types'
import uuid from 'uuid'

export const setAlert = (msg, alertType, formType) => dispatch => {
    const id = uuid.v4()
    dispatch({
        type: SET_ALERT,
        payload: {
            msg,
            alertType,
            formType,
            id

        }
    })
    setTimeout(() => {
        dispatch({
            type: REMOVE_ALERT,
            payload: id
        })
    }, 5000)
}
// export const removeAlert = (id) => dispatch => {
//     console.log(REMOVE_ALERT)
//     dispatch({
//         type: REMOVE_ALERT,
//         payload: id
//     })
// }