import React, { Component } from 'react';
import AlcoholsList from './components/alcoholsList/'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AlcoholsList />
      </div>
    );
  }
}

export default App;
