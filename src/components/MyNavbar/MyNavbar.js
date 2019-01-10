import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../pages/Auth/Auth';
// import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    isAuthed: PropTypes.bool,
    logoutClickEvent: PropTypes.func,
  }

  state = {
    isOpen: false,
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { isAuthed, logoutClickEvent } = this.props;
    if (!isAuthed) {
      return (
          <div className="my-navbar">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Not Authed</NavbarBrand>
          <NavbarToggler onClick={e => this.toggle(e)} />
          <NavLink onClick={logoutClickEvent}>Logout</NavLink>
          <Collapse isOpen={this.state.isOpen} navbar>
            {/* {buildNavbar()} */}
          </Collapse>
        </Navbar>
        <div>
        <Auth />
        </div>
      </div>
      );
    }

    return (
      <div className="my-navbar">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Authed</NavbarBrand>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink to='/friends'><i className="fas fa-user-friends fa-2x"></i></NavLink>
            </NavItem>
          </Nav>
          <NavbarToggler onClick={e => this.toggle(e)} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {/* {buildNavbar()} */}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
