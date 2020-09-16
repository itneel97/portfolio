import React, { Component } from 'react';
import Aux from './hoc/Auxiliary/Auxiliary';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Work from './components/Work/Work';
import Resume from './components/Resume/Resume';
import WithError from './hoc/WithErrorHandler/WithErrorHandler';


// import classes from './App.module.css';

class App extends Component {
  render() {
    return (
      <Aux>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/About" component={About} />          
          <Route exact path="/Work" component={Work} />          
          <Route exact path="/Resume" component={Resume} />          
          <Route component={WithError} />          
        </Switch>
{/* 
        <Home />
        <Services />
        <About />
        <Work /> */}
      </Aux>
    );
  }
}

export default App;
