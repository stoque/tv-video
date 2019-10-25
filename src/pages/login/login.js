import React, { useEffect } from 'react'
import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyAeIBXY73Rvo5rM1axqXIE35H4sg3YTv1U',
  authDomain: 'watch-tv-79190.firebaseapp.com',
  databaseURL: 'https://watch-tv-79190.firebaseio.com',
  projectId: 'watch-tv-79190',
  storageBucket: 'watch-tv-79190.appspot.com',
  messagingSenderId: '40043266579',
  appId: '1:40043266579:web:f559a6813c6c79623735e6',
  measurementId: 'G-5FXV08PTTK'
}

firebase.initializeApp(firebaseConfig)

function Login () {
  async function login () {
    const provider = new firebase.auth.GoogleAuthProvider()
    try {
      const result = await firebase.auth.signInWithPopup(provider)
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    login()
  }, [])

  return (
    <h1>Login</h1>
  )
}

export default Login
