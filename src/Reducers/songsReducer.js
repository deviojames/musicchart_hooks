export default function(state, action) {
    switch(action.type) {
        case 'ADD_FAV_SONG': {
            const newState = state.track.map((song) => {
                if (song.name === action.data.name && song.artist.name === action.data.artist.name ) {
                    if (action.data.liked) {
                        return {...song, liked: false};
                    } else {
                        return {...song, liked: true};
                    }
                } else {
                    return song;
                }
            })

            return { track: newState, favSongs: newState.filter(song => song.liked === true), };
        }
        case 'SET_SONGS_DATA': {
            const newState = [];
            action.songs.track.map((track) => {
                newState.push({...track, liked: false })
            });
            return { track: newState, favSongs: [], };
        }
        default:
            return state;
    }
}