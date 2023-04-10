import React from 'react';
import Musics from './Musics';
import { addMusicActionCreator } from '../redux/musics-reducer';
import { connect } from 'react-redux';


class MusicsContainer extends React.Component {
componentDidMount(){

}


render() {
    return <Musics {...this.props} musics={this.props.musics}/>
}
}

let mapStateToProps = (state) => {
    return {
    musics: state.musicPage.musics
}}



export default connect(mapStateToProps, {addMusicActionCreator:addMusicActionCreator}) (MusicsContainer);