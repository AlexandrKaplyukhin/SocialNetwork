import Icon from "@mdi/react";
import { mdiMusicCircleOutline } from "@mdi/js";
import React from "react";
import styled from "styled-components";

const MusicWrapper = styled.div`
  display: grid;
  background-color: rgb(223, 223, 223);
  justify-content: center;
  overflow:hidden ;
`;
const MusicPlayer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-self: center;
  padding: 1em;
  width: 30vw;
  min-width: 400px;
  background-color: #bbbbbb;
  border-radius: 1em;
  margin: 5vh 0;
  @media (max-width:450px){
    margin: 2vh 1vh;
    width: 100vw;
    min-width: 200px;
    border-radius: 0;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;;
    
    }
`;
const AllMusics = styled.div`
  display: grid;
  justify-content: left;
  border-radius: 1em;
  padding: 2vh;
  grid-gap:1vh;
  width:50vw;
  min-width: 350px;
  background-color: #bbbbbb;
  overflow: hidden;
  margin-bottom: 5vh;
  @media (max-width:450px){
   justify-self: center;
   justify-content: center;

    }
`

const TreckWrapper = styled.div`
    background-color: #9b9b9b;
    border-radius: 0.5em;
    padding:2%;
    display:grid;
    width:48vw;
    grid-column-gap: 1vw;
    min-width: 300px;
    grid-template-columns: 1fr 10fr;
    transition: 0.1s;
    cursor: pointer;
    &:hover{
        padding:2.5%;
        transition: 0.1s;
    }
`
const NameOfPlayer = styled.h1`
@media (max-width:450px){
  text-align: center;
}
`

const FieldPlayer = styled.audio`
  @media (max-width:450px){
    justify-self: center;
  }
`
const Musics = () => {
  /* let musicsData = props.musics.map((music) => (
    <TreckWrapper onClick={CheckTrack} >
      <Icon path={mdiMusicCircleOutline} size={1} />
      <NameOfTrack>{music.nameOfTrack}</NameOfTrack>
    </TreckWrapper>
  )); */

  //const musicInfo = React.createRef();
  /* let addMusic = () => {
    props.addMusicActionCreator();
  }; */
  const sound1 = require("../assets/musics/San Holo - All The Highs.mp3");
  const sound2 = require("../assets/musics/San Holo-Light.mp3");
  const sound3 = require("../assets/musics/The Score - Fire.mp3");
  const sound4 = require("../assets/musics/The Score - Revolution.mp3");
  let IdSound = React.createRef()
  const CheckTrack = (e) => {
    if(e.target.id == 1){
      return sound1
    }
    
  }

 
  return (
    <MusicWrapper>
      <MusicPlayer>
        <NameOfPlayer>Music Player</NameOfPlayer>
        <FieldPlayer controls>
          <source ref={IdSound} src={sound4} type="audio/mpeg" />
        </FieldPlayer>
      </MusicPlayer>

      <AllMusics>
      <TreckWrapper id='1' onClick={CheckTrack} >
      <Icon path={mdiMusicCircleOutline} size={1} />
      <p>San Holo - All The Highs</p>
      </TreckWrapper>
      <TreckWrapper id='2' onClick={CheckTrack} >
      <Icon path={mdiMusicCircleOutline} size={1} />
      <p>San Holo-Light</p>
      </TreckWrapper>
      <TreckWrapper id='2' onClick={CheckTrack} >
      <Icon path={mdiMusicCircleOutline} size={1} />
      <p>The Score - Fire</p>
      </TreckWrapper>
      <TreckWrapper id='2' onClick={CheckTrack} >
      <Icon path={mdiMusicCircleOutline} size={1} />
      <p>The Score - Revolution</p>
      </TreckWrapper>
      </AllMusics>
    </MusicWrapper>
  );
};

export default Musics;
