import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import styles from './splash.module.scss'

function Splash () {
  const history = useHistory()

  useEffect(() => {
    setInterval(() => {
      history.push('/login')
    }, 30000)
  }, [history])

  return (
    <h1 className={styles.splash}>Splash</h1>
  )
}

export default Splash
