import React, { Component } from 'react';
import Navigation from './components/Navigation.jsx';

import './css/main.css'

class App extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <footer>jonzingale@gmail.com</footer>
      </div>
    );
  }
}

export default App;