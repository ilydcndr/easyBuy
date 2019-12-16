import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class Cart extends Component {

  totalPrice = () => {
    let total = 0;
    this.props.Cart.forEach(selectedItem => {
      let quantity = selectedItem.quantity;
      let perPrice = selectedItem.unitPrice;
      total += quantity * perPrice;
      console.log(quantity)
      console.log(perPrice)
      console.log(total)
      return (
        total
        );
    });
  };

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
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.Cart.map(selectedItem => {
              return (
                <tr key={selectedItem.id}>
                  <td>{selectedItem.id}</td>
                  <td>{selectedItem.categoryId}</td>
                  <td>{selectedItem.productName}</td>
                  <td>{selectedItem.unitPrice}</td>
                  <td>{selectedItem.quantity}</td>
                  <td>
                    <Button color="danger">Delete</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tr> Total Price: {this.totalPrice()}</tr> 
        </Table>
      </div>
    );
  }
}
