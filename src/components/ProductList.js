import React, { Component, createContext } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from "../Context"

export default class ProductList extends Component {
    state= {
        products: []
    }
    render() {
        return (
            <div>
              <React.Fragment>
                  <div >
                      <div className="container" > 
                          <Title  title="Smart Phones"  />                  
                          <div className="row">
                              <ProductConsumer>
                                  {(value)=>{
                                return value.products.map( productitem => {
                                      return <Product key={productitem.id} product= {productitem}/>
                                });
                                  }}
                              </ProductConsumer>
                          </div>
                      </div>
                  </div>
              </React.Fragment>
               
            </div>
        );
    }
}

