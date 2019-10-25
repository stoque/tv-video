import React, { useEffect, useState } from 'react'
import firebase from '@firebase/app'
import 'firebase/auth'

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
  const [userInfo, setUserInfo] = useState({
    user: null,
    isLogged: false
  })

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) setUserInfo({ user, isLogged: true })
    })
  }, [])

  async function login () {
    const provider = new firebase.auth.GoogleAuthProvider()
    try {
      const result = await firebase.auth().signInWithRedirect(provider)
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  async function logout () {
    firebase.auth().signOut().then(() => {
      setUserInfo({
        user: null,
        isLogged: false
      })
    })
  }

  return (
    <div>
      {userInfo.isLogged && (
        <h1>{userInfo.user.providerData[0].displayName}</h1>
      )}

      {!userInfo.isLogged && (
        <button onClick={login}>Entrar com Google</button>
      )}

      {userInfo.isLogged && (
        <button onClick={logout}>Sair</button>
      )}
    </div>
  )
}

export default Login
