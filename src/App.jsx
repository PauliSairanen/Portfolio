import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <main>
      <Switch>
        <Route path='/' component={} exact />
        <Route path='/about' component={About} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </main>
  );
}

export default App;
