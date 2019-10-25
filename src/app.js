import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import SplashPage from 'pages/splash'
import LoginPage from 'pages/login'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={SplashPage} />
        <Route path='/login' exact component={LoginPage} />
      </Switch>
    </Router>
  )
}

export default App
