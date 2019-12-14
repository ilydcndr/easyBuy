import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class Categories extends Component {
  state = {
    Categories: []
  };
  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then(response => response.json())
      .then(data => this.setState({ Categories: data }));
  };

  render() {
    return (
      <div>
        <h2>{this.props.title} </h2>
        <ListGroup>
          {this.state.Categories.map(Category => {
            return (
              <ListGroupItem key={Category.id} onClick={() => this.props.tiklandiginda(Category)} active={Category.categoryName===this.props.selectedCategory?true:false}>
                {Category.categoryName}
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    );
  }
}

export default Categories;
