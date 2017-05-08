import React, { Component } from 'react';
import Favorites from '../Favorites/Favorites'
import Button from '../Button/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className='header'>
          <h1>SWAPI-Box</h1>
          <Favorites />
        </section>

        <Button name={'People'}/>
      </div>
    );
  }
}

export default App;
