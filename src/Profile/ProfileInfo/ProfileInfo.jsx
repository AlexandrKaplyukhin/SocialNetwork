import styled from 'styled-components';
import Preloader from '../../assets/Preloader/Preloader';
import Icon from '@mdi/react';
import { mdiStarShooting } from '@mdi/js';

const ProfileInfoWrapper = styled.div`
    display: grid;
    grid-template-rows: 3fr 1fr;
    height: 40vh;
    justify-content: center;
    min-height: 300px;
    padding-top:2%;
    justify-content: stretch;
    padding: 0 10% 0 10%;
    min-width: 450px;
`
const ProfileWrapper = styled.div`
    margin-top:3%;
    background-color: rgb(187, 187, 187);
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    padding:3%;
    border-radius: 1em 1em 0 0 ;
    display:grid;
    grid-template-column: 1fr 1fr;
    grid-gap: 10%;
    transition:0.5s;
    overflow:hidden;
    min-width: 300px;
    display: flex;
    justify-content: center;
`
const PhotoProfile = styled.img`
    border-radius: 1em;
    max-height: 100%;
`
const AboutProfile = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    font-size: 100%;
`
const InfoBar = styled.div`
    display: grid;
    align-items: center;
    justify-content: stretch;
    text-align: center;
    width:100%;
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
`

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (

        <ProfileInfoWrapper>
            <ProfileWrapper>
                <PhotoProfile
                    src={props.profile.photos.large}
                    alt="" />
                <AboutProfile>
                    <h2>Alexandr Kaplyukhin</h2>
                    <h3>Location: Kazan</h3>
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
                    <InfoBlock>
                        <Icon path={mdiStarShooting} size={1.3} />
                    </InfoBlock>

                </OtherInformations>
            </InfoBar>

        </ProfileInfoWrapper>

    )
}

export default ProfileInfo;