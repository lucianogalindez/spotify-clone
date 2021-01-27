export const authEndpoint = 'https://accounts.spotify.com/authorize'
//cuando me logeo me llevara a esta direccion para verificar los datos

const redirectUri = 'http://localhost:3000/'
//posteriormente me redirige a mi ubicacion

const clientId = 'd321cc675e834f059f4a1d4d37bd384c'

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]
//permisos necesarios (son obligatorios) para poder interactuar dentro de spotify

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=')
            initial[parts[0]] = decodeURIComponent(parts[1])
            return initial
        }, {})
}
//hago esto para quedarme con la parte del token

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`
//%20 representa un espacio en una URL