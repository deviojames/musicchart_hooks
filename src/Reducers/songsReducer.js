export default function(state, action) {
    switch(action.type) {
        case 'ADD_FAV_SONG': {
            const newState = state.favSongs;
            const filterd = state.favSongs.filter(item => item.name === action.data.name && item.artist.name === action.data.artist.name)
            if (filterd.length === 0) {
                newState.push({
                    ...action.data,
                    liked: true,
                });
                return {track: state.track, favSongs: newState};
            } else {
                return {track: state.track, favSongs: state.favSongs.filter(item => item.name !== action.data.name)};
            }
        }
        case 'SET_SONGS_DATA': {
            return { track: action.songs.track, favSongs: [], };
        }
        default:
            return state;
    }
}