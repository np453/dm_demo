import React, { Component } from 'react'
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import Homepage from './views/homepage'
import './sass/main.scss'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
