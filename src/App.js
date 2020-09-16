import React, { Component } from 'react';
import Aux from './hoc/Auxiliary/Auxiliary';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';


// import classes from './App.module.css';

class App extends Component {
  render() {
    return (
      <Aux>
        <Header />


        <Home />
        <Services />
        <About />


        <Footer />
      </Aux>
    );
  }
}

export default App;
