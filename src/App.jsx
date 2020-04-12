import React, { Component } from 'react';
import Navigation from './components/Navigation.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Would a css loader to help??
import './css/main.css'

class App extends Component {

  render() {
    return (
      <div className='main'>
        <Navigation />
        <footer>jonzingale@gmail.com</footer>
      </div>
    );
  }
}

export default App;