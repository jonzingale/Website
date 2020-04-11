import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

import TestTemplate from './../pages/TestTemplate.jsx';
import HaskellCoders from './../pages/HaskellCoders.jsx';
import SvgTemplate from './../pages/SvgTemplate.jsx';

class Navigation extends Component {

  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar>
              <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/haskell-coding-group">HaskellCoders</Nav.Link>
                <Nav.Link href="/svg-template">SvgTemplate</Nav.Link>
              </Nav>
            </Navbar>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/haskell-coding-group">
                <HaskellCoders title='Haskell on Jupyter'/>
              </Route>
              <Route path="/svg-template">
                <SvgTemplate title='svg notebook'/>
              </Route>
              <Route path="/" title='jonzingale@gmail.com'>
                <TestTemplate />
              </Route>
            </Switch>
          </div>
        </Router>
        <footer>jonzingale@gmail.com</footer>
      </div>
    );
  }
}

export default Navigation;