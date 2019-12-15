import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class Cart extends Component {
  render() {
    return (
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Category Id</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Units In Stock</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.Cart.map(selectedItem => {
              return (
                <tr >
                  <td>{selectedItem.id}</td>
                  <td>{selectedItem.productName}</td>
                  <td>{selectedItem.UnitPrice}</td>
                  <td>{selectedItem.UnitInStock}</td>
                  <td>{selectedItem.quantity}</td>
                  <td><Button>DELETE</Button></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
