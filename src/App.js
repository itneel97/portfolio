import React, { Component } from 'react';
import Aux from './hoc/Auxiliary/Auxiliary';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import classes from './App.module.css';

class App extends Component {
  render() {
    return (
      <Aux> 
        <Header />

      </Aux>
    );
  }
}

export default App;
