import './App.css';
import Login from './components/Login/Login';
import {useEffect, useState} from 'react'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player/Player';
import { useDataLayerValue } from './DataLayer'

const spotify = new SpotifyWebApi(); //crea una instancia de spotify

function App() {

  //const [token, setToken] = useState('')

  //dispatch es como un arma que dispara al DataLayer
  const [{user, token}, dispatch] = useDataLayerValue()

  /*console.log(window.location.hash.substring(1).split('&').reduce((initial, item)=>{
    let parts = item.split('=')
    initial[parts[0]] = decodeURIComponent(parts[1])

    return initial
  }, {}))*/

  useEffect(() => {
    const hash = getTokenFromUrl();

    //por motivos de seguridad, para que los demas no vean tu id
    window.location.hash = ''

    const _token = hash.access_token;
    
    if (_token) {

      dispatch({
        type: 'SET_TOKEN',
        payload: _token
      })

      //se guarda en el estado
      //setToken(_token)

      spotify.setAccessToken(_token);

      spotify.getMe() //ejemplo de funcionalidad //devuelve una promesa
        .then(user => {
          //console.log(user)

          dispatch({
            type: 'SET_USER',
            payload: user
          })

        })

    }
    
  }, [])

  console.log(token)

  return (
    <div className="App">
      { 
        token ? (
          <Player />
        ) : ( 
          <Login />
        )
      }

    </div>
  );
}

export default App;
