import React from 'react'
import {useState, useEffect} from 'react'
import RealShit from './components/SongList/RealShit/RealShit'
import CoolBeat from './components/SongList/CoolBeat/CoolBeat'
import Option from './components/Option'
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const style={
    background: '#333',
    color: '#fff'
  }
  return (
    <Router>
      <div className="App">
      <Nav/>
      <Switch>
      <Route path='/' exact component={Option} />
      <Route path='/About' component={About} />
      <Route path='/Contact' component={Contact} />
      <Route path='/RealShit'  component={RealShit} />
      <Route path='/CoolBeat'  component={CoolBeat} />
      </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
