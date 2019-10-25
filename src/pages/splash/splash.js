import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function Splash () {
  const history = useHistory()

  useEffect(() => {
    setInterval(() => {
      history.push('/login')
    }, 2000)
  }, [history])

  return (
    <h1>Splash</h1>
  )
}

export default Splash
