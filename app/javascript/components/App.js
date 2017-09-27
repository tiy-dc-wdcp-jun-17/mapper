import React, { Component } from 'react'
import Landing from './Landing'
import Map from './Map'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

class App extends Component {
  render () {
    return <Router>
      <div className='App'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/map">Map</Link></li>
      </ul>
      <Switch>
      <Route exact path="/" component={Landing}/>
      <Route path="/map" component={Map}/>
    </Switch>
    </div>
  </Router>
  }
}

export default App
