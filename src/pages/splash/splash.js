import React, { useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import styles from './splash.module.scss'

function Splash () {
  const isLogged = false
  const history = useHistory()

  const getNextRoute = useCallback(() => {
    if (!isLogged) {
      return '/login'
    } else {
      return '/switch-user'
    }
  }, [isLogged])

  useEffect(() => {
    const timeToRedirect = 2000
    setInterval(() => {
      const nextRoute = getNextRoute()
      history.push(nextRoute)
    }, timeToRedirect)
  }, [history, getNextRoute])

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.splash}>Watch TV</h1>
    </div>
  )
}

export default Splash
