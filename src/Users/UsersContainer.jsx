import { connect } from 'react-redux';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalCountActionCreator, setIsFetchingActionCreator } from '../redux/users-reducer';
import Users from './Users';
import React from 'react';
import axios from 'axios';
import Preloader from '../assets/Preloader/Preloader';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetchingActionCreator(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true,
        }).then(response => {
            this.props.setIsFetchingActionCreator(false);

            this.props.setUsersActionCreator(response.data.items);
            this.props.setTotalCountActionCreator(response.data.totalCount);

        })
    }

    onPageChange = (numPage) => {
        this.props.setCurrentPageActionCreator(numPage)
        this.props.setIsFetchingActionCreator(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numPage}&count=${this.props.pageSize}`, {
            withCredentials: true,
        }).then(response => {
            this.props.setIsFetchingActionCreator(false);
            this.props.setUsersActionCreator(response.data.items);
        })
    }


    render() {
        debugger;
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} onPageChange={this.onPageChange} users={this.props.users}
                    follow={this.props.followActionCreator} unfollow={this.props.unfollowActionCreator} />
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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



let myUsersContainer = connect(mapStateToProps, {
    followActionCreator,
    unfollowActionCreator,
    setUsersActionCreator,
    setCurrentPageActionCreator,
    setTotalCountActionCreator,
    setIsFetchingActionCreator,


})(UsersContainer);


export default myUsersContainer;