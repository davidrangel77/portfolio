import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './app'
import Landing from './landing'

// https://github.com/ReactTraining/react-router
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md
// https://developer.mozilla.org/en-US/docs/Web/API/History_API
//  Push state allows us to have a meaningful browser history
//    in order to use the browser's back button
render(
  (
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path="/landing" component={ Landing } />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)