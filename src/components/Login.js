import React from 'react'
import "../styles/Login.css"
import { loginUrl } from '../components/spotify.js'   // присваивание loginUrL результат выполнения spotify.js

export default function Login() {
  return (
    <div className='login'>
        <img alt='' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"></img>
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}
