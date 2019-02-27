import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Athletes from './components/athletes'
import Customers from './components/customers'
import Landing from './components/landing'
import Sports from './components/sports'
import Teams from './components/teams'
import Navbar from './components/navbar'
import Signup from './components/registration/signup'
import Login from './components/registration/login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar/>
            <Switch>
              <Route path="/about" component={About}/>
              <Route path="/contact" render={()=> <Contact phone="555-3412"/>}/>
              <Route path="/person/:id" component= {Person} />
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
