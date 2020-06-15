import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import styled from "styled-components";


class Details extends Component {
    render() {
        return (
            <ProductConsumer>
            {value => { const {id, company, img, info, price, title, inCart} = value.detailProduct;
                 return (
                     <MainContainer className = "container py-5">
                     
                         <div className = "row">                     
                             <div className = "col-10 col-md-6 my-3">
                                 <img src = {img} className= "img-fluid product-img" alt="product" />
                             </div>
                             {/* product text */}
                          
                             <div className="col-10 mx-auto col-md-6 my-3 text-capitalize info-container">
                                   <h2 className="product-title text-capitalize"> {title}</h2>
                                        <h4 className= "heading-title text-uppercase mt-3 mb-2">
                                        manufacturer <span className = "text-uppercase font-weight-normal ml-3"> {company}</span>
                                        </h4>
                                      <hr></hr>
                                        <p className="text-uppercase heading-title mt-3 mb-0 ">
                                            Phone information
                                        </p>
                                        <p className="text-muted body-text">{info}</p>

                                        <hr></hr>
                                        <h4 className="price cost">
                                            <strong>
                                                 <span className="currency">R$</span>
                                                {price}
                                            </strong>
                                        </h4>
                                        {/* buttons */}
                              
                                            <Link to="/">
                                              <button className="rounded button text-uppercase"
                                              onClick = { ()=> {
                                                  value.addToCart(id);
                                                  value.openModal(id);
                                              }}>
                                                 Add to cart
                                              </button>
                                            </Link>
                                        
                             </div>
                         </div>

                     </MainContainer>
                 );
        }}
            </ProductConsumer>
              
        );
    }
}

export default Details;


const MainContainer= styled.div`
.button{
background: var(--lightGrey);
color: var(--mainWhite);
font-size: 1.2rem;
width: 15rem;
height: 3rem;
padding: 0.6rem 0.4rem;
font-weight: 700;
font-family: 'Cabin', sans-serif !important;
transition: all 0.1s linear;
cursor: pointer;
border: none;
margin-top: 2rem;
display: block;
}

.button:hover{
    text-decoration:none;
    color: var(--mainRed);
}
.product-img{
text-align: right;
padding-left: 80px;
}

.info-container{
right: 80px;   
}

.cost{
margin-right: 3rem;;
margin-top: 2rem;
}

.currency{
  font-size:1rem;
  padding-top: 2rem;
}
.product-title{
  font-size: 2.5rem;
  font-family: 'Cabin', sans-serif !important;
  font-weight: 400;
  color: var(--lightGrey);
  }



`   

