import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavbarText
} from "reactstrap";
import { Link } from "react-router-dom";

class Cartsummary extends Component {
  fullCart() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart
          <br></br>
          {this.props.Cart.length}
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.Cart.map(selectedProduct => {
            return (
              <DropdownItem key={selectedProduct.id}>
                {selectedProduct.productName}
                <Badge color="warning">{selectedProduct.quantity}</Badge>
                <Badge
                  onClick={() => this.props.deleteAll(selectedProduct)}
                  color="danger"
                >
                  Delete
                </Badge>
              </DropdownItem>
            );
          })}
          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
          <DropdownItem>
            <Link to="cart">Sepete Git</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  emptyCart() {
    return <NavbarText>Empty Cart!</NavbarText>;
  }

  render() {
    return (
      <div>
        {this.props.Cart.length > 0 ? this.fullCart() : this.emptyCart()}
      </div>
    );
  }
}
export default Cartsummary;
