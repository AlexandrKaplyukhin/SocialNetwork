import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import musicsReducer from "./musics-reducer" 
import authReducer from "./auth-reducer";

let reducers = combineReducers({profilePage: profileReducer,
                                dialogPage: dialogsReducer,
                                usersPage: usersReducer, 
                                musicPage: musicsReducer,
                                sidebar: sidebarReducer,
                                auth: authReducer
                            })

let store = createStore(reducers);

window.store = store

export default store;