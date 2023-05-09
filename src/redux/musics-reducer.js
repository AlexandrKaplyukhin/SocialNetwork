//import musicFile from '../assets/musics/San Holo - All The Highs'
const ADD_MUSIC = 'ADD_MUSIC'
const sound1 = require('../assets/musics/San Holo - All The Highs.mp3')
const sound2 = require('../assets/musics/San Holo-Light.mp3')
const sound3 = require('../assets/musics/The Score - Fire.mp3')
const sound4 = require('../assets/musics/The Score - Revolution.mp3')


let initialState = {
    musics: [
        { id: 1, nameOfTrack: 'San Holo - All The Highs', file: sound1 },
        { id: 2, nameOfTrack: 'San Holo-Light', file: sound2  },
        { id: 2, nameOfTrack: 'The Score - Fire', file: sound3  },
        { id: 2, nameOfTrack: 'The Score - Revolution', file: sound4  },
    ]
}

const musicsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MUSIC: {
            let newTrack = {
                id: 3, nameOfTrack: 'newMusics2', file: '1235'
            }
            return {
                ...state,
                musics: [...state.musics, newTrack]
            }
        }
        default:
            return state;
    }
}

export const addMusicActionCreator = (nameOfTrack, file) => (
    {
        type: ADD_MUSIC, nameOfTrack: nameOfTrack, file: file
    }
)

export default musicsReducer;