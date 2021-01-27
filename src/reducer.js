//Es un objeto
export const initialState = {
    user: null,
    token: null,
    playlists: [],
    playing: false,
    item: null
}

const reducer = (state, action) => {
console.log(action)

    //Action => type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.payload
            }
        
        default:
            return {...state}
    }

}

export default reducer;