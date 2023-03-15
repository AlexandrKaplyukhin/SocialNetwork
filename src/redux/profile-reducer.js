const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initilaState = {
    posts: [
        {id: 1, message: 'Alex the best', like: 15},
        {id: 1, message: 'Alex the best', like: 15},
        {id: 1, message: 'Alex the best', like: 15},
    ],
    newPostText: 'Alex the best homa'
}

const profileReducer = (state = initilaState, action) => {
    switch(action.type) {

        case ADD_POST: {
    
            let stateCopy = {
                ...state
            }

            stateCopy.posts = [
                ...state.posts
            ]

        let newPost = {
            id: 1,
            message: state.newPostText,
            like: 13
        }
        stateCopy.posts.push(newPost)
        stateCopy.newPostText = '';
        return stateCopy;
    }

        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {
                ...state
            }
            stateCopy.newPostText = action.newText;
    return stateCopy;
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
export default profileReducer;