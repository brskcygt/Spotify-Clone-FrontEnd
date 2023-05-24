import {combineReducers,applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';
import allPlaylistsReducer from './reducers/playlistsReducer'


const reducers = combineReducers({
    playlists:allPlaylistsReducer,
});

const store = createStore(reducers,applyMiddleware(thunk));


export default store;
