import styled from 'styled-components';
//import Preloader from '../../assets/Preloader/Preloader';
import Icon from '@mdi/react';
import { mdiStarShooting } from '@mdi/js';
//import ProfileStatus from "./ProfileStatus"
import PhotoUser from '../../assets/images/users.png'

const ProfileInfoWrapper = styled.div`
    display: grid;
    grid-template-rows: 3fr 1fr;
    height: 40vh;
    min-height: 300px;
    justify-content: stretch;
    padding: 2% 10% 0 10%;
    min-width: 450px;
    @media (max-width:450px) {
        height: auto;
        min-width: 200px;
        min-height: 100px;
        padding: 0;
        }
`
const ProfileWrapper = styled.div`
    margin-top:3%;
    background-color: rgb(187, 187, 187);
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    padding:3%;
    border-radius: 1em 1em 0 0 ;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10%;
    transition:0.5s;
    overflow:hidden;
    min-width: 300px;
    display: flex;
    justify-content: center;
    @media (max-width:450px) {
        border-radius:0;
        padding:5%;
        display:grid;
        grid-template-columns: 1fr 2fr;
        box-shadow: 0;

        grid-gap: 7%;
    align-items:center;
    min-width: 100px;

    margin:0;
        }
`
const PhotoProfile = styled.img`
    border-radius: 1em;
    max-width: 100%;
`
const AboutProfile = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    font-size: 100%;
    @media (max-width:450px) {
        font-size: 90%;
        }
`
const InfoBar = styled.div`
    display: grid;
    align-items: center;
    justify-content: stretch;
    text-align: center;
    width:100%;
    @media (max-width:450px) {
        }
`
const OtherInformations = styled.div`
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    background-color: #8f8f8f;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 5%;
    min-width: 98%;
    padding:1%;
    align-self: start;;
    border-radius: 0em 0em 1em 1em;
    border-top: 0.2em solid #1a1a54;
    @media (max-width:450px) {
        border-radius: 0;
        box-shadow: 0;

    }
`

const InfoBlock = styled.div`
    border-radius: 0.5em;
    background-color: rgb(153, 153, 153);
    font-weight: bold;
    padding: 5%;
    transition: 0.5s;
    display: grid;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover{
    background-color: #1a1a54;
    color:white;
    transition: 0.5s;  
    }
    @media (max-width:450px) {
font-size:90%;
    }
`
 const PopUpWindow = styled.div`
 display: grid;
 justify-content: center;
 align-items: center;
    position: fixed;
    top:0;
    left:0;
    width: 100vw;;
    height: 100vh;
    background-color: #5757579d;
    transition:1s;
    z-index: 15;
    backdrop-filter: blur(5px);

 `

 const TestWindow = styled.div`
    display: grid;
    grid-row-gap: 2vh;
    z-index: 16;
    background-color: white;
    border-radius: 1em;
    padding: 10%;
    width:20vw;
    min-width: 300px;
    min-height: 100px;
    height: 10vh;
    text-align: center;
    @media (max-width:450px){
        width:70vw;
    min-width: 100px;
    min-height: 100px;
    height: 10vh;
    padding: 4%;
    justify-self: center;
    }
 `
 const CloseTestWindow = styled.button`
    border:none;
    cursor: pointer;
    border-radius: 0.5em;
    font-family: 'Courier New', Courier, monospace;
    font-size: large;
    font-weight: bold;
    background-color: #4e60af;
    transition: 0.5s;
padding: 0.5vh;
    &:hover {
        transition: 0.5s;
        background-color: #1330af;
color:white
    }
 `
const ProfileInfo = (props) => {
    
    const popupWindow = () => {

    props.setTestWindowAC()
    }

    const closePopupWindow = () =>{
        props.delTestWindowAC()

    }
     /* if (!props.profile) {
         return <Preloader />
     } */
    return (

        <ProfileInfoWrapper>
            {props.isSelected ? <PopUpWindow>
<TestWindow>
    <h1>Работает</h1>
    <CloseTestWindow onClick={closePopupWindow}>Close</CloseTestWindow>
</TestWindow>
            </PopUpWindow> : null}
            <ProfileWrapper>
                <PhotoProfile
                    src={ PhotoUser }
                    alt="" />
                <AboutProfile>
                    <h2>Alexandr Kaplyukhin</h2>
{/*                     <ProfileStatus status={props.status} updateStatusThunk={props.updateStatusThunk}/>
 */}                    <h3>Location: Kazan</h3>
                    <h3>Birthday: 07.09.2000</h3>
                    <h3>Family status: nejenat</h3>
                    <h3>Link VK: 23432423421</h3>
                </AboutProfile>
            </ProfileWrapper>
            <InfoBar>
                <OtherInformations className='otherInformations'>
                    <InfoBlock>
                        <p>Friends</p>
                        24
                    </InfoBlock>
                    <InfoBlock>
                        <p>Musics</p>
                        32
                    </InfoBlock>
                    <InfoBlock>
                        <p>Photos</p>
                        56
                    </InfoBlock>
                    <InfoBlock>
                        <p>Likes</p>
                        {234}
                    </InfoBlock>
                    <InfoBlock onClick={popupWindow}>
                        <Icon path={mdiStarShooting} size={1.3} />
                    </InfoBlock>

                </OtherInformations>
            </InfoBar>

        </ProfileInfoWrapper>

    )
}

export default ProfileInfo;