const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initilaState = {
    profile: null,
    posts: [
        { id: 1, message: 'Test', like: 15 },
        { id: 1, message: 'Test', like: 15 },
        { id: 1, message: 'Test', like: 15 },
    ],
    newPostText: 'Test menu'
}

const profileReducer = (state = initilaState, action) => {
    switch (action.type) {

        case ADD_POST: {

            let newPost = {
                id: 1,
                message: state.newPostText,
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


        default:
            return state;
    }
}

export const addPostActionCreator = () => (
    {
        type: ADD_POST
    }
)

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}

export default profileReducer;