import { NavLink } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiExitToApp, mdiAccountPlus, mdiMenu } from '@mdi/js';
import styled from 'styled-components';

//---------- Styled Components ----------
const HeaderWrapper = styled.header`
    background-color: #1a1a54;
    display: grid;
    grid-area: h;
    grid-template-columns: 1fr 5fr 1fr;
    justify-content: center;
    align-items: center;
    min-width: 900px;
    @media (max-width:450px){
        min-width: 100px;
        width:100vw;
    }
`

const NavLinkToProfile = styled(NavLink)`
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    font-size: 1.2em;
    letter-spacing: 0.5px;
    color:white;
    &:active{
        margin-top:0.1em;
    }
    @media (max-width:450px){
        font-size: 1em;
    }
`

const NavLinkToLogin = styled(NavLink)`
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    font-size: 1.2em;
    letter-spacing: 0.5px;
    color:white;
    @media (max-width:450px){
        font-size: 0.5em;
        font-weight: bolder;
    }
`

const MultiCard = styled.div`
    position: relative;
    perspective: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover .front{
    transform: rotateY(180deg);
    }
    &:hover .back{
    transform: rotateY(360deg);
    }
`

const MultiCardFront = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    backface-visibility: hidden;
    cursor: pointer;
    font-weight: bold;
    color: white;
    letter-spacing: 2px;
`

const MultiCardBack = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    backface-visibility: hidden;
    cursor: pointer;
    transform: rotateY(180deg);
    color: white;
`

const Menu = styled.div`
display: flex;
    align-items: center;
    justify-content: center;
    color:white;
    visibility:hidden;
    transition:0.1s;
    &:active{
    color:blue;
    }
    @media(max-width:450px){
        visibility:visible;
    }
`
//---------- --------------- ----------


const Header = (props) => {
    return (
        <HeaderWrapper>
            <Menu>
            <Icon path={mdiMenu} size={1.5} />
            </Menu>
            <NavLinkToProfile to='/profile'>Social Network</NavLinkToProfile>
            <NavLinkToLogin to=''>
                <div>
                    <MultiCard>
                        <MultiCardFront className='front'>
                            {props.isAuth ? <p>{props.login}</p> : <NavLink to='/login'>Login</NavLink>}
                        </MultiCardFront>
                        <MultiCardBack className='back'>
                            {props.isAuth ? <Icon onClick={props.logout} path={mdiExitToApp} size={1.5} /> : <NavLink  to='/login'>Logout<Icon path={mdiAccountPlus} size={1.5} /></NavLink>}
                        </MultiCardBack>
                    </MultiCard>
                </div>
            </NavLinkToLogin>

        </HeaderWrapper>
    )
}

export default Header;