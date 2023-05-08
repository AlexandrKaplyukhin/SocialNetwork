import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE_IS_FOLLOWING_PROGRESS';


let initilaState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 3,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initilaState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                })

            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                })

            }
        }

        case SET_USERS: {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }

        case SET_CURRENT_PAGE: {

            return {
                ...state, currentPage: action.currentPage
            }
        }

        case SET_TOTAL_COUNT: {
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        }
        case TOOGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case TOOGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id != action.userId)
        }}
        
        default:
            return state
    }
}

export const followActionCreator = (userId) => {
    return { type: FOLLOW, userId }
}

export const unfollowActionCreator = (userId) => {
    return { type: UNFOLLOW, userId }
}

export const setUsersActionCreator = (users) => {
    return { type: SET_USERS, users }

}

export const setCurrentPageActionCreator = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage }
}

export const setTotalCountActionCreator = (totalUsersCount) => {
    return {
        type: SET_TOTAL_COUNT, totalUsersCount
    }
}
export const setIsFetchingActionCreator = (isFetching) => {
    return {
        type: TOOGLE_IS_FETCHING, isFetching
    }
}

export const setIsFollowingProgressActionCreator = (isFetching, userId) => {
    return {
        type: TOOGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
    }
}

export const getUsers = (currentPage, pageSize ) => {


return (dispatch) => {
    dispatch(setIsFetchingActionCreator(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setIsFetchingActionCreator(false));

            dispatch(setUsersActionCreator(data.items));
            dispatch(setTotalCountActionCreator(data.totalCount));

        })
}
}

export const follow = (userId) => {


    return (dispatch) => {
        dispatch(setIsFollowingProgressActionCreator(true, userId))

        usersAPI.follow(userId).then(data => {
                
                if (data.resultCode == 0) {
                    dispatch(followActionCreator(userId))
                }
                dispatch(setIsFollowingProgressActionCreator(false, userId)) 

            })
    }
    }

    export const unfollow = (userId) => {


        return (dispatch) => {
            dispatch(setIsFollowingProgressActionCreator(true, userId))
    
            usersAPI.follow(userId).then(data => {
                    
                    if (data.resultCode == 0) {
                        dispatch(unfollowActionCreator(userId))
                    }
                    dispatch(setIsFollowingProgressActionCreator(false, userId)) 
    
                })
        }
        }

export default usersReducer;