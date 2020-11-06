import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Screens/Home'
import About from './Screens/About'
import Portfolio from './Screens/Portfolio'
import Contact from './Screens/Contact'

import NavBar from './Components/NavBar'

const App = () => {
  return (
    <main>
      <NavBar />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </main>
  );
}

export default App;
