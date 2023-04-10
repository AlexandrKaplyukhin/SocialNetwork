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
            debugger;
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        case UNFOLLOW:
            return {

            }
        default:
            return state
    }
}

export const setUserDataActionCreator = (id, email, login) => ({
    type: SET_USER_DATA, data: { id, email, login }
})

export default authReducer;