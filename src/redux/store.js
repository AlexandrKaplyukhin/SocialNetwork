import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Alex the best', like: 15},
                {id: 1, message: 'Alex the best', like: 15},
                {id: 1, message: 'Alex the best', like: 15},
            ],
            newPostText: 'Alex the best homa'
        },
        dialogPage: {
            dialogsData: [{id: 1, name: 'Alex'}, {id: 2, name: 'Eva'}, {id: 3, name: 'Kirill'}],
            messagesData: [{style: 'from', message: "Hello"}, {style: 'toMe', message: "I'am Alex"}, {
                id: 3, message: "It developer"
            }, {id: 4, message: 'Danil'}],
            newMessageText: 'Alex the best IT-shnik in Kazan'
        },
        sidebar: [{id: 1, name: 'Alex'}, {id: 2, name: 'Eva'}, {id: 3, name: 'Kirill'}]
    },
    _callSubscriber() {
        console.log('worked');
    },
    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){ 
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)        
    }
}


export default store;
