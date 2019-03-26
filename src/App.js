import React, { Component } from 'react';
import './App.css';
import Square from './Square';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Square 
        text="Card 1"
        backgroundColor="primary"
        />
        <Square 
        text="Card 2"
        backgroundColor="secondary"
        />
        <Square 
        text="Card 3"
        backgroundColor="primary"
        />
        <Square 
        text="Card 4"
        backgroundColor="primary"
        />
      </div>
    );
  }
}

export default App;
