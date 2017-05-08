import React, { Component } from 'react';
import Favorites from '../Favorites/Favorites'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className='header'>
          <h1>SWAPI-Box</h1>
          <Favorites />
        </section>
      </div>
    );
  }
}

export default App;
