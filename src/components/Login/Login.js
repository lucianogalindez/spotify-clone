import React from 'react'
import { loginUrl } from '../../spotify'
import './Login.css'

export default function Login() {
    return (
        //BEM
        <div className='login'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1200px-Spotify_logo_with_text.svg.png' alt='spotify logo'/>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}
