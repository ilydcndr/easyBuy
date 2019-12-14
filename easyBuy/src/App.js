import React from "react";
import Navigation from "./Navigation";
import Categories from "./Categories";
import Products from "./Products";
import { Container, Row, Col, ToastHeader } from "reactstrap";

class App extends React.Component {
  state = {
    sectigim: "",
    products: [],
    Cart:[]
  };

  componentDidMount() {
    this.getProducts();
  }

  /**ayni üründen 2 kere eklediğimde sepet toplam sayısında gözükmesin o ürünün quantity değeri artsın yani sepete girince görüntüleyelim */
  addToCart=(product)=>{
    let count=this.state.Cart.length
    if(product.productName){
      this.setState({
        count:count+=1
      })
    }
    this.setState({
      Cart:[...this.state.Cart].concat({...product})
    },()=>{console.log(this.state.Cart)})
  }

  getProducts = (categoryId) => {
    let url="http://localhost:3000/products"
    if(categoryId){
     url+="?categoryId="+categoryId
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  };

  tiklandiginda = Categori => {
    this.getProducts(Categori.id);
    this.setState({
      sectigim: Categori.categoryName
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xl="12">
              <Navigation title="Navigation" 
              Cart={this.state.Cart}
              />
            </Col>
          </Row>
          <Row>
            <Col xl="4">
              <Categories
                title="Categories"
                tiklandiginda={this.tiklandiginda}
                sectigim={this.state.sectigim}
              />
            </Col>

            <Col xl="8">
              <Products
                title="Products"
                sectigim={this.state.sectigim}
                products={this.state.products}
                addToCart={this.addToCart}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
