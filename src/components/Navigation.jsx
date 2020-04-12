import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import TestTemplate from './../pages/TestTemplate.jsx';
import HaskellCoders from './../pages/HaskellCoders.jsx';
import SvgTemplate from './../pages/SvgTemplate.jsx';
import Explorable from './../pages/Explorable.jsx';

class Navigation extends Component {

  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    console.log(this.state.isOpen)
    // <Nav.Link href='/lights-game'>Lights Game</Nav.Link>
    return (
      <div>
        <Router>
          <div>
            <Navbar expanded={!this.state.isOpen} onClick={this.toggleCollapse} >
              <Navbar.Collapse>
              <Nav>
                
                <NavDropdown title='dropdown' href='/haskell-coding-group'>
                  <NavDropdown.Item href="#/action-1">Listable</NavDropdown.Item>
                  <NavDropdown.Item href="#/action-2">Sortable</NavDropdown.Item>
                  <NavDropdown.Item href="#/action-3">Vector</NavDropdown.Item>
                  <NavDropdown.Item href="#/action-3">Abelian Zippers</NavDropdown.Item>
                  <NavDropdown.Item href="#/action-3">HTF</NavDropdown.Item>
                  <NavDropdown.Item href="#/action-3">Umeboshi</NavDropdown.Item>
                  <NavDropdown.Item href="#/action-3">Havel-Hakimi</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/haskell-coding-group">HaskellCoders</Nav.Link>
                <Nav.Link href="/explorable">Explorable</Nav.Link>
                <Nav.Link href="/svg-template">SvgTemplate</Nav.Link>
              </Nav>
              </Navbar.Collapse>
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
              <Route path="/explorable">
                <Explorable title='Explorable'/> {/* TODO: Migrate*/}
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