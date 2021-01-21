import React, {Component, Fragment} from 'react'
import {Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container} from 'reactstrap';
  import { connect } from 'react-redux';
  import PropTypes from 'prop-types';
  import RegisterModal from './auth/RegisterModal'
  import Login from './auth/loginModal'
  import Logout from './auth/logout'

  class AppNavbar extends Component {
    state = {
      isOpen: false
    };

    static propTypes = {
      auth: PropTypes.object.isRequired
    }
    toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      const { isAuthenticated, user} = this.props.auth;

      const authLinks = (
        <Fragment>
          <NavItem>
            <span className="navbar-text mr-3">
              <strong>{ user ? `Welcome ${user.name}` : ''}</strong>
            </span>
          </NavItem>
          <NavItem>
            <Logout/>
          </NavItem>
        </Fragment>
      );

      const guestLinks = (
        <Fragment>
          <NavItem>
            <RegisterModal/>
          </NavItem>
          <NavItem>
            <Login/>
          </NavItem>
        </Fragment>
      )

      return (
          <div>
          <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
              <NavbarBrand href="#">Todo's List</NavbarBrand>
              <NavbarToggler onClick={this.toggle}/>
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem >
                    <NavLink href="https://github.com/sanadwj">Github</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://www.linkedin.com/in/sanad-abujubara/">Linkedin</NavLink>
                  </NavItem>
                  { isAuthenticated ? authLinks : guestLinks}
                  
                </Nav>
                
              </Collapse>
            </Container>
          </Navbar>
        </div>
      );
      
    }
    
  }

  const mapStateToProps = state => ({
    auth: state.auth
  })

  export default connect(mapStateToProps, null)(AppNavbar);