import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from 'react-redux';
import { setUserProfile } from "../redux/profile-reducer";
import { useParams } from 'react-router-dom';

export function withRouter(Children) {
    return (props) => {

        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        //let profileId = this.props.router.params.userId;    
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 12
        }
        //this.props.setIsFetchingActionCreator(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data)
            // this.props.setIsFetchingActionCreator(false);
        })
    }
    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile: setUserProfile })(withUrlDataContainerComponent);
//export default connect(mapStateToProps,{setUserProfile})(withRouter(ProfileContainer));  