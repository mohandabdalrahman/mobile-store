import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            title,
            price,
            img,
            company,
            info,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center my-5">
                  <h1>{title}</h1>
                </div>
              </div>

              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img
                    className="img-fluid"
                    src={img}
                    alt="product img"
                  />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>model: {title}</h2>
                  <h4 className="text-title mt-3 mb-2">
                    made by:
                    <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price : <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="mt-3 mb-0">some info about product</p>
                  <p className="text-muted">{info}</p>
                  <div>
                    <Link to="/">
                      <ButtonContainer>
                        back to product
                      </ButtonContainer>
                    </Link>
                    <Link to="">
                      <ButtonContainer cart
                        onClick={() => {
                          value.addToCart(id);
                          value.openModel(id);
                        }
                        
                        }
                        disabled={inCart}
                      >
                        {inCart ? "inCart" : "Add to cart"}
                      </ButtonContainer>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
