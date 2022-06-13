export const initialState = {
    user: null,
    playlists: [],
    // playlist: [],
    spotify: null,
    playing: false,
    item: null,
    token: null,
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){

        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }

        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }

        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            }

        // case 'SET_PLAYLIST_DATA':
        //     return{
        //         ...state,
        //         playlist: action.playlist
        //     }
        
        case 'SET_SPOTIFY':
            return{
                ...state,
                spotify: action.spotify
            }


        default: return state;
    }
}

export default reducer;