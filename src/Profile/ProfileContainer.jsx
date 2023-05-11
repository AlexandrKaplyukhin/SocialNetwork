import React from "react";
import Profile from "./Profile";
import { connect } from 'react-redux';
import { getUserProfile,delTestWindowAC, getStatusThunk, updateStatusThunk, setTestWindowAC  } from "../redux/profile-reducer";
import { useParams } from 'react-router-dom';
import { compose } from "redux";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import PhotoUser from '../assets/images/users.png'


export function withRouter(Children) {
    return (props) => {

        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}
 
class ProfileContainer extends React.Component {

    state = {
        profile: {
            photos: {
                large: PhotoUser
            }
        },
        isSelected: false
    }

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId 
        } else /* {
            userId = 12
        } */
      this.props.getUserProfile(userId)
      this.props.getStatusThunk(userId)
    
    }

    
    render() {
        return <Profile {...this.props} profile={this.props.profile} delTestWindowAC={this.props.delTestWindowAC} isSelected={this.props.isSelected} status={this.props.status} updateStatusThunk={this.props.updateStatusThunk} setTestWindowAC={this.props.setTestWindowAC}/>
    }
}



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.id,
    isAuth: state.auth.isAuth,
    isSelected: state.profilePage.isSelected

})

export default compose( 
    connect(mapStateToProps, { getUserProfile:getUserProfile, getStatusThunk: getStatusThunk, updateStatusThunk:updateStatusThunk, setTestWindowAC: setTestWindowAC, delTestWindowAC:delTestWindowAC }),
withRouter,

) (ProfileContainer)