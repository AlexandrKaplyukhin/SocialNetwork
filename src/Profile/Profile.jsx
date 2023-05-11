import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import styled from 'styled-components';
import { Navigate } from "react-router-dom";

const ProfileWrapper = styled.div`
    background-color: rgb(223, 223, 223);
    display: grid;
    justify-content: center;
    grid-area: c;
    height: 100%;
    @media (max-width:450px) {
        margin-bottom: 7vh;
    }
`
const Profile = (props) => {
    return (
        <ProfileWrapper>
            <ProfileInfo delTestWindowAC={props.delTestWindowAC} setTestWindowAC={props.setTestWindowAC} isSelected={props.isSelected}/* profile={props.profile} status={props.status} updateStatusThunk={props.updateStatusThunk} *//>
            
            <MyPostsContainer />
        </ProfileWrapper>
    )
}

export default Profile;