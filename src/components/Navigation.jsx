import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav, Dropdown } from 'react-bootstrap';

import TestTemplate from './../pages/TestTemplate.jsx';
import HaskellCoders from './../pages/HaskellCoders.jsx';
import SvgTemplate from './../pages/SvgTemplate.jsx';

class Navigation extends Component {

  render() {

  // not yet any good.
  function dropdown() {
    return(
      <Dropdown>
        <Dropdown.Toggle variant='Primary'>
         <Nav.Link href="/haskell-coding-group">HaskellCoders</Nav.Link>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Listable</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Sortable</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Vector</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Abelian Zippers</Dropdown.Item>
          <Dropdown.Item href="#/action-3">HTF</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Umeboshi</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Havel-Hakimi</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }

    return (
      <div>
        <Router>
          <div>
            <Navbar>
              <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href='/lights-game'>Lights Game</Nav.Link>
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
              <Route path="/lights-game">
                <SvgTemplate title='Wow Lights Game'/> {/* TODO: Migrate*/}
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