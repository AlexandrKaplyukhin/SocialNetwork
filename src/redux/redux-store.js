import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import musicsReducer from "./musics-reducer"
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer,
    musicPage: musicsReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;