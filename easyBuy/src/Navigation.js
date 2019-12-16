import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
} from "reactstrap";
import Cartsummary from "./Cartsummary";


class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      navCollapsed: true,
      showNavbar: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><h2>easyBUY</h2></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home Page</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/ilydcndr/easyBuy">
                  GitHub
                </NavLink>
              </NavItem>
              <Cartsummary Cart={this.props.Cart} deleteAll={this.props.deleteAll} Reset={this.props.Reset} totalPrice={this.props.totalPrice}/>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
