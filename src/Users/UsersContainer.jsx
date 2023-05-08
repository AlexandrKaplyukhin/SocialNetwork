import { connect } from 'react-redux';
import { followActionCreator,
     unfollowActionCreator,
       setCurrentPageActionCreator,
    setIsFollowingProgressActionCreator,
    getUsers
} from '../redux/users-reducer';
import Users from './Users';
import React from 'react';
import Preloader from '../assets/Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';


class UsersContainer extends React.Component {

    componentDidMount() {
      
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (numPage) => {
        this.props.setCurrentPageActionCreator(numPage);

        this.props.getUsers(numPage, this.props.pageSize)
    }


    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} onPageChange={this.onPageChange} users={this.props.users}
                    followingInProgress={this.props.followingInProgress} follow={this.props.followActionCreator} unfollow={this.props.unfollowActionCreator} setIsFollowingProgressActionCreator={this.props.setIsFollowingProgressActionCreator} />
            </>
        )
    }
}



/*
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
    setCurrentPage: (numPage) => {
        dispatch (setCurrentPageActionCreator(numPage))
    },
    setTotalUsersCount: (totalCount) => {
        dispatch(setTotalCountActionCreator(totalCount))
    },
    toggleIsFetching: (isFetching) => {
        dispatch(setIsFetchingActionCreator(isFetching))
    }


}
}*/

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}



export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        followActionCreator,
        unfollowActionCreator,
        setCurrentPageActionCreator,
        setIsFollowingProgressActionCreator,
        getUsers
    })
)(UsersContainer)