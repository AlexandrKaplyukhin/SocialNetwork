import React from "react";
import Profile from "./Profile";
import { connect } from 'react-redux';
import { getUserProfile, getStatusThunk, updateStatusThunk  } from "../redux/profile-reducer";
import { useParams } from 'react-router-dom';
import { compose } from "redux";
import { withAuthRedirect } from "../hoc/withAuthRedirect";

export function withRouter(Children) {
    return (props) => {

        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}
 
class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId 
        }
      this.props.getUserProfile(userId)
      this.props.getStatusThunk(userId)
    }

    
    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatusThunk={this.props.updateStatusThunk}/>
    }
}



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose( 
    connect(mapStateToProps, { getUserProfile:getUserProfile, getStatusThunk: getStatusThunk, updateStatusThunk:updateStatusThunk }),
withRouter,

) (ProfileContainer)