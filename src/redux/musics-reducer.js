const ADD_MUSIC = 'ADD_MUSIC'
let initialState = {
    musics: [
        {id: 1, nameOfTrack: 'newMusics', file: '123'},
        {id: 2, nameOfTrack: 'newMusics1', file: '1234'},


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
        type: ADD_MUSIC , nameOfTrack:nameOfTrack, file: file
    }
)

export default musicsReducer;