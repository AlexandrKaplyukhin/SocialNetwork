import style from './Musics.module.css'
import Icon from '@mdi/react';
import { mdiMusicCircleOutline } from '@mdi/js';
import React from 'react';

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
        <div className={style.musics_wrapper}>
            <div className={style.add_musics}>
                <p>Добавьте музыку из своего устройства</p>
                <input ref={musicInfo} onClick={addMusic} type="file" name='test' accept="image/png, image/jpeg" multiple placeholder='123' />

            </div>
            <div className={style.all_musics}>
                {musicsData}            </div>
        </div>
    )
}

export default Musics;