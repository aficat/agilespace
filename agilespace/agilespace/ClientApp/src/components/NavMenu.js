import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';
import './mdb.css';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
      <Navbar inverse fixedTop fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
                    <img src={require('./img/logo.png')} />
                              </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
            <LinkContainer to={'/'} exact>
              <NavItem>
                <Glyphicon glyph='home' /> Home
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/findspace'}>
              <NavItem>
                <Glyphicon glyph='map-marker' /> Find Space
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/listspace'}>
              <NavItem>
                            <Glyphicon glyph='list' /> List Space
              </NavItem>
                    </LinkContainer>
                    <LinkContainer to={'/about'}>
                        <NavItem>
                            <Glyphicon glyph='plane' /> About Us
                            </NavItem>
                    </LinkContainer>
                    <LinkContainer to={'/dashboard'}>
                        <NavItem>
                            <Glyphicon glyph='user' /> Dashboard
                            </NavItem>
                    </LinkContainer>
                    <LinkContainer to={'/member'}>
                        <NavItem>
                            <Glyphicon glyph='user' /> Login
                            </NavItem>
                    </LinkContainer>
                    <LinkContainer to={'/test'}>
                        <NavItem>
                            <Glyphicon glyph='user' /> Test
                            </NavItem>
                    </LinkContainer>
                    <LinkContainer to={'/admin'}>
                        <NavItem>
                            <Glyphicon glyph='user' /> Admin
                            </NavItem>
                    </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        </Navbar>

    );
  }
}
