import React, { Component } from "react";
import { Table,Button } from "reactstrap";

class Products extends Component {


  render() {
    return (
      <div>
        <h2>
          {this.props.title}--{this.props.sectigim}
        </h2>

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units In Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => {
              return (
                <tr>
                  <th scope="row">{product.id}</th>
                  <td>{product.productName}</td>
                  <td>{product.quantityPerUnit}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.unitsInStock}</td>
                  <td onClick={()=>this.props.addToCart(product)} ><Button color="success">Add</Button ></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Products;
