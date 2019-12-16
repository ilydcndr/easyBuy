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
                    <Button color="danger" onClick={()=>this.props.deleteAll(selectedItem)}>Delete</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tr> Total Price: {this.props.total}</tr>
        </Table>
      </div>
    );
  }
}
