import style from './Navbar.module.css'
import { NavLink } from "react-router-dom";
import Icon from "@mdi/react";
import {
    mdiAccountCircleOutline,
    mdiCogOutline,
    mdiHeadphones,
    mdiMessageOutline,
    mdiNewspaperVariantOutline,
    mdiAccountGroupOutline,
    mdiPlayPause,
    mdiSkipForward,
    mdiSkipBackward
} from "@mdi/js";
import styled, { keyframes } from 'styled-components';


const NavbarWrapper = styled.div`
display: grid;
    grid-area: n;
    @media (max-width:450px) {
        display:none;
        margin-top:6vh;
        background-color:grey;
            position:absolute;
            width:100vw;
            height:100vh;
}
`

const Content = styled.div`
@media (max-width:450px) {
    display: grid;
    grid-template-rows: 2fr 1fr;
}
`
const MenuWrapper = styled.div`
    display: grid;
    grid-row-gap: 3%;
    margin-top: 4%;
    min-height: 270px;
    height: 6em;
    @media (max-width:450px) {
        margin-top: 0;

    }
`

const PlayerWrapper = styled.div`
    display:grid;
    grid-template-rows: 2fr 1fr;
    border-radius:1em;
    padding:5%;
    margin:10% 0 10% 0;
    background-color: #c4c4c4;
    @media (max-width:450px) {
        padding:0;
        border-radius:1em 1em 0 0;
        margin:20% 0 10% 0;



}
`
const ControlButton = styled.button`
    border:none;
    border-radius:0.5em;
    background-color: rgba(255, 255, 255, 0);
    transition:0.5s;
    margin: 0 4% 0 4%;
    padding:2%;
    &:hover{
        background-color: grey;
    }
`
const ControlPlayer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
`

const animationText = keyframes`
0% {
    transform: translateX(150%)
}
100% {
    transform: translateX(-150%)
}
`
const NameTrack = styled.div`
    width:100%;
    font-weight: bold;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow: hidden;
`
const ValueName = styled.p`
      animation:${animationText}  5s infinite linear;
`

const FriendsListWrapper = styled.div`
    text-align: center;
    border-radius: 1em;
    display: grid;
    background-color: #c4c4c4;
    height: 9em;
    padding-top:3%;
    @media (max-width:450px) {
        display:none;
}
`
const FriendsList = styled.div`
    padding: 5%;
    display: grid;
    grid-template-columns: 27% 27% 27% ;
    grid-gap: 9.5%;
    background-color: #8f8f8f;
    border-radius: 1em;
    font-size: 1em;
    overflow: hidden;
`

const FriendWrapper = styled.div`
    font-weight: bold;
    font-size: 70%;
    display: grid;
    grid-template-rows: 2fr 1fr;
    align-items: center;
    background-color: white;
    border-radius: 0.5em;
    cursor:pointer;
    padding-top:10%;
`

const ImgWrapper = styled.img`
justify-self: center;
align-self:start;
    border-radius: 0.2em;
    width: 80%;
    align:top;
`
const Navbar = () => {

    return (
        <NavbarWrapper>
            <Content>
                <MenuWrapper>
                    <NavLink to="/profile"
                        className={navData => navData.isActive ? style.linkMenuActive : style.linkMenu}><Icon
                            path={mdiAccountCircleOutline} size={1} />Profile</NavLink>
                    <NavLink to="/users"
                        className={navData => navData.isActive ? style.linkMenuActive : style.linkMenu}><Icon
                            path={mdiAccountGroupOutline} size={1} />Users</NavLink>
                    <NavLink to="/messages" className={navData => navData.isActive ? style.linkMenuActive : style.linkMenu}><Icon
                        path={mdiMessageOutline} size={1} />Messages</NavLink>
                    <NavLink to="/news"
                        className={navData => navData.isActive ? style.linkMenuActive : style.linkMenu}><Icon
                            path={mdiNewspaperVariantOutline} size={1} />News</NavLink>
                    <NavLink to="/music"
                        className={navData => navData.isActive ? style.linkMenuActive : style.linkMenu}><Icon
                            path={mdiHeadphones} size={1} />Music</NavLink>
                    <NavLink to="/setting"
                        className={navData => navData.isActive ? style.linkMenuActive : style.linkMenu}><Icon
                            path={mdiCogOutline} size={1} />Settings</NavLink>
                </MenuWrapper>

                <PlayerWrapper>
                    <ControlPlayer>
                        <ControlButton>
                            <Icon path={mdiSkipBackward} size={1} />
                        </ControlButton>
                        <ControlButton>
                            <Icon path={mdiPlayPause} size={1} />
                        </ControlButton>
                        <ControlButton>
                            <Icon path={mdiSkipForward} size={1} />
                        </ControlButton>
                    </ControlPlayer>
                    <NameTrack>
                        <ValueName>NameOfTrack</ValueName>
                    </NameTrack>
                </PlayerWrapper>
                <FriendsListWrapper>
                    <h3>Friends Online</h3>
                    <FriendsList>
                        <FriendWrapper>
                            <ImgWrapper src="https://www.meme-arsenal.com/memes/f912cc2f1a3af12c0d4822532fe8395b.jpg" alt="" />
                            <p>Alexandr</p>
                        </FriendWrapper>
                        <FriendWrapper>
                            <ImgWrapper src="https://www.meme-arsenal.com/memes/f912cc2f1a3af12c0d4822532fe8395b.jpg" alt="" />
                            <p>Alexandr</p>
                        </FriendWrapper>
                        <FriendWrapper>
                            <ImgWrapper src="https://www.meme-arsenal.com/memes/f912cc2f1a3af12c0d4822532fe8395b.jpg" alt="" />
                            <p>Alexandr</p>
                        </FriendWrapper>
                    </FriendsList>
                </FriendsListWrapper>
                </Content>

        </NavbarWrapper>
    )
}

export default Navbar;