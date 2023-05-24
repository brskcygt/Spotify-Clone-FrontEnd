import { ActionType } from "../ActionTypes";


export const getAllPlaylists = (data) => {
   
    return { type: ActionType.ALL_PLAYLISTS, payload: data.allPlaylists }
   
}

export const getRecommended = (data) => {
    
    return { type: ActionType.REC_PLAYLISTS, payload: data.recommended }
    
}

export const getRecentlyPlayed = (data) => {
    
    return { type: ActionType.RECENTLY_PLAYED, payload: data.recentlyPlayed }
    
}