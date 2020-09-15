import React, { Component } from 'react';
import Aux from './hoc/Auxiliary/Auxiliary';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home'
// import classes from './App.module.css';

class App extends Component {
  render() {
    return (
      <Aux> 
        <Header />
        <Home />
        <Footer />

      </Aux>
    );
  }
}

export default App;
