import style from './Musics.module.css'
import Icon from '@mdi/react';
import { mdiMusicCircleOutline } from '@mdi/js';
import React from 'react';
import styled from 'styled-components';
const MusicWrapper = styled.div`
display: grid;
`
const StyledTitle= styled.h1`
color:green`

const Musics = (props) => {
    //debugger;
    let musicsData = props.musics.map(music => (
        <div>
            <Icon path={mdiMusicCircleOutline} size={1} />
            <p>{music.nameOfTrac}</p>
            <p>{music.file}</p>
        </div>
    ))

    const musicInfo = React.createRef();
    let addMusic = () => {
        props.addMusicActionCreator()
    }
    return (
        <MusicWrapper>
            <div className={style.add_musics}>
                <p>Добавьте музыку из своего устройства</p>
                <input ref={musicInfo} onClick={addMusic} type="file" name='test' accept="image/png, image/jpeg" multiple placeholder='123' />

            </div>
            <div className={style.all_musics}>
                {musicsData}            </div>
        </MusicWrapper>
    )
}

export default Musics;