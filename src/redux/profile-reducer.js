import { profileAPI, usersAPI } from "../api/api";


const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initilaState = {
    profile: null,
    posts: [
        { id: 1, message: 'Test', like: 15 },
        { id: 1, message: 'Test', like: 15 },
        { id: 1, message: 'Test', like: 15 },
    ],
    newPostText: 'Test menu',
    status: ""
}

const profileReducer = (state = initilaState, action) => {
    switch (action.type) {

        case ADD_POST: {

            let newPost = {
                id: 1,
                message: action.textPost,
                like: 13
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost],

            }

        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        case SET_STATUS:{
            return{
                ...state,
                status: action.status
            }
        }

        default:
            return state;
    }
}

export const addPostActionCreator = (textPost) => (
    {
        type: ADD_POST, textPost: textPost
    }
)

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}

export const setStatusAC = (status) => {
    return{
        type: SET_STATUS, status
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}

export const getStatusThunk = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatusAC(response.data))
    })
}

export const updateStatusThunk = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0){
        dispatch(setStatusAC(status))
        }
    })
}

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}
export default profileReducer;