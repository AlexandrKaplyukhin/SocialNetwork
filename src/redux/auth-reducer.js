//import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    id: null,
    email: null,
    login: null,
    //isFetching: true
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        case UNFOLLOW:
            return {

            }
        default:
            return state
    }
}

export const setUserDataActionCreator = (id, email, login, isAuth) => ({
    type: SET_USER_DATA, payload: { id, email, login, isAuth }
})

export const getAuth = () => (dispatch) => {
    authAPI.meAuth().then(response => {
        if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data
            dispatch(setUserDataActionCreator(id, email, login, true))
        }
    })
}

/* export const login = (email, password, rememberme) => (dispatch) => {

authAPI.login(email, password, rememberme)
.then(response => {
    if (response.data.resultCode === 0) {
        dispatch(getAuth())
    } else  {
        debugger;
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error";
        dispatch(stopSubmit("login",{_error: message}));

    }
})
}

export const logout = () => (dispatch) => {
    authAPI.logout()
    .then(response => {
        if (response.data.resultCode === 0) {
         dispatch(setUserDataActionCreator(null, null, null, false))

        }
    })
    } */

export default authReducer;