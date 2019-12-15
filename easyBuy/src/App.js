import React from "react";
import Navigation from "./Navigation";
import Categories from "./Categories";
import Products from "./Products";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router-dom";
import Cart from "./Cart";

class App extends React.Component {
  state = {
    selectedCategory: "",
    products: [],
    Cart: []
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = categoryId => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  };

  tiklandiginda = Categori => {
    this.getProducts(Categori.id);
    this.setState({
      selectedCategory: Categori.categoryName
    });
  };

  /**ayni üründen 2 kere eklediğimde sepet toplam sayısında gözükmesin o ürünün quantity değeri artsın yani sepete girince görüntüleyelim */
  addToCart = product => {
    const Cart = this.state.Cart;
    const addedProduct = Cart.find(c => {
      return c.id === product.id;
    });
    if (addedProduct) {
      addedProduct.quantity += 1;
      this.setState({ Cart: Cart });
    } else {
      this.setState({
        Cart: [...Cart].concat({ ...product, quantity: 1 })
      });
    }
    alertify.success(product.productName + " " + "added to your Cart!");
  };

  deleteAll = product => {
    const notDeleted = this.state.Cart.filter(c => {
      return c.id !== product.id;
    });
    this.setState({
      Cart: notDeleted
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xl="12">
              <Navigation
                title="Navigation"
                Cart={this.state.Cart}
                deleteAll={this.deleteAll}
              />
            </Col>
          </Row>
          <Row>
            <Col xl="4">
              <Categories
                title="Categories"
                tiklandiginda={this.tiklandiginda}
                selectedCategory={this.state.selectedCategory}
              />
            </Col>
            <Col xl="8">
              <Switch>
                <Route
                  exact
                  path="/"
                  component={() => (
                    <Products
                      title="Products"
                      selectedCategory={this.state.selectedCategory}
                      products={this.state.products}
                      addToCart={this.addToCart}
                    />
                  )}
                ></Route>
                <Route exact path="Cart/" component={Cart}></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
