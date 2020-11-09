import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Screens/Home'
import About from './Screens/About'
import Portfolio from './Screens/Portfolio'
import Contact from './Screens/Contact'
import NavBar from './Components/NavBar'

import { StyleSheet, css } from 'aphrodite'

const App = () => {
  return (
    <main>
      <div className={css(styles.background)}>
        <NavBar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    </main>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(34deg, #16171F, #16171F 65%, #24262D 60%, #24262D)'
  }
})

export default App;
