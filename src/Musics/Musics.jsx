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
const NameOfTrack = styled.p`
`
const Musics = (props) => {
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
        <h1>Music Player</h1>
        <audio controls>
          <source ref={IdSound} src={()=> {
            
          }} type="audio/mpeg" />
        </audio>
      </MusicPlayer>

      <AllMusics>
      <TreckWrapper id='1' onClick={CheckTrack} >
      <Icon path={mdiMusicCircleOutline} size={1} />
      <NameOfTrack>San Holo - All The Highs</NameOfTrack>
      </TreckWrapper>
      <TreckWrapper id='2' onClick={CheckTrack} >
      <Icon path={mdiMusicCircleOutline} size={1} />
      <NameOfTrack>San Holo-Light</NameOfTrack>
      </TreckWrapper>
      </AllMusics>
    </MusicWrapper>
  );
};

export default Musics;
