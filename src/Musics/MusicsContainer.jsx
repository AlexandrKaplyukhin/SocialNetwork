import React from 'react';
import Musics from './Musics';
import { addMusicActionCreator } from '../redux/musics-reducer';
import { connect } from 'react-redux';

const sound1 = require("../assets/musics/San Holo - All The Highs.mp3");
  const sound2 = require("../assets/musics/San Holo-Light.mp3");
  const sound3 = require("../assets/musics/The Score - Fire.mp3");
  const sound4 = require("../assets/musics/The Score - Revolution.mp3");

class MusicsContainer extends React.Component {
    state = {
        src: [sound1, sound2, sound3, sound4],
        playngSound: this.state.src[1]
    }
    
    EditMusic = (num) => {
        this.setState({
            playngSound: this.state.src[num]
        })
            }

    componentDidMount() {

    }

    render() {
        return <Musics {...this.props} musics={this.props.musics} />
    }
}

let mapStateToProps = (state) => {
    return {
        musics: state.musicPage.musics
    }
}



export default connect(mapStateToProps, { addMusicActionCreator: addMusicActionCreator })(MusicsContainer);