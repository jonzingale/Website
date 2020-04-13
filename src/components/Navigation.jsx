import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import TestTemplate from './../pages/TestTemplate.jsx';
import HaskellCoders from './../pages/HaskellCoders.jsx';
import SvgTemplate from './../pages/SvgTemplate.jsx';
import Explorable from './../pages/Explorable.jsx';

class Navigation extends Component {

  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
     this.setState({ isOpen: false })
  }

  handleClick = (url) => {
    window.location = url
  }

  render() {
    const jupyterStub1 = 'https://github.com/jonzingale/Haskell/blob/master/HaskellStudy/Lists/Documentation/'
    const jupyterStub2 = 'https://github.com/jonzingale/Haskell/blob/master/HaskellStudy/LinearAlgebra/ComplexVector/Documentation/'
    const jupyterStub3 = 'https://github.com/jonzingale/Haskell/blob/master/Attenuations/dev/Documentation/'
    const jupyterStub4 = ''
    return (
      <div>
        <Router>
          <div>
            <Navbar>
              <Navbar.Collapse>
              <Nav>
                <Nav.Link className="nav-link" href="/">Home</Nav.Link>

                <NavDropdown title='HaskellCoders!'
                  onClick={() => this.handleClick('/haskell-coding-group')}
                  onMouseEnter={ this.handleOpen }
                  onMouseLeave={ this.handleClose }
                  show={ this.state.isOpen }
                  role="navigation"
                >
                  <NavDropdown.Item href={jupyterStub1 + 'Listables.ipynb'}>
                    Listable
                  </NavDropdown.Item>
                  <NavDropdown.Item href={jupyterStub1 + 'Sortable.ipynb'}>
                    Sortable
                  </NavDropdown.Item>
                  <NavDropdown.Item href={jupyterStub2 + 'Vector.ipynb'}>
                    Vector
                  </NavDropdown.Item>
                  <NavDropdown.Item href={jupyterStub1 + 'AbelianActions.ipynb'}>
                    Abelian Zippers
                  </NavDropdown.Item>
                  <NavDropdown.Item href={jupyterStub3 + 'HTF.ipynb'}>
                    HTF
                  </NavDropdown.Item>
                  <NavDropdown.Item href={jupyterStub4 + 'HTF.ipynb'}>
                    Umeboshi
                  </NavDropdown.Item>
                  <NavDropdown.Item href={jupyterStub4 + 'HTF.ipynb'}>
                    Havel-Hakimi
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link className="nav-link" href="/explorable">D3Journal</Nav.Link>
                <Nav.Link className="nav-link" href="/svg-template">SvgTemplate</Nav.Link>
                <Nav.Link href='https://github.com/jonzingale'>GitHub</Nav.Link>
                <Nav.Link href='/lights-game'>Lights Game</Nav.Link>
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