import { connect } from 'react-redux';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../redux/users-reducer';
import Users from './UsersC';


let mapStateToProps = (state) => {
    return {
users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
return{
    follow: (userId) => {
        dispatch (followActionCreator(userId))
    },
    unfollow: (userId) => {
        dispatch (unfollowActionCreator(userId))
    },
    setUsers: (users) => {
        dispatch (setUsersActionCreator(users))
    },

}
}



    let myUsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);
        

export default myUsersContainer;