import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

import HaskellOnJupyter from './pages/HaskellOnJupyter';
import TestTemplate from './pages/TestTemplate';
import TestTemplate2 from './pages/TestTemplate2';

import './css/main.css'

// TODO:
// - Routing
      // <HaskellOnJupyter />

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Navbar bg='dark' variant='dark' expand='lg'>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/column-template">Template1</Nav.Link>
              <Nav.Link href="/grid-template">Template2</Nav.Link>
            </Nav>
          </Navbar>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/grid-template">
              <TestTemplate2 />
            </Route>
            <Route path="/column-template">
              <TestTemplate />
            </Route>
            <Route path="/">
              <HaskellOnJupyter />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;