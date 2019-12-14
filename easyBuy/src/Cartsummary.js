import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge
} from "reactstrap";

class Cartsummary extends Component {
  render() {
    return (
      <div>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Options
            <br></br>
            {this.props.Cart.length}
          </DropdownToggle>
          <DropdownMenu right>
            {this.props.Cart.map(selectedProduct => {
              return (
                <DropdownItem key={selectedProduct.id}>
                  {selectedProduct.productName}
              <Badge color="warning">{selectedProduct.quantity}</Badge>
                </DropdownItem>
              );
            })}
            <DropdownItem divider />
            <DropdownItem>Reset</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }
}
export default Cartsummary;
