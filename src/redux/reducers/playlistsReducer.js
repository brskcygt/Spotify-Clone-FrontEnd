import {ActionType} from '../ActionTypes.js'

const INITIAL_STATE = {
    myPlaylists:[],
    recommended:[],
    recPlayed:[],
}


const allPlaylistsReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ActionType.ALL_PLAYLISTS:
            return {
                ...state,
                myPlaylists: action.payload
            }
        case ActionType.REC_PLAYLISTS:
            return {
                ...state,
                recommended: action.payload
            }
        case ActionType.RECENTLY_PLAYED:
            return {
                ...state,
                recPlayed: action.payload
            }
        default:
            return state
    }
}

export default allPlaylistsReducer