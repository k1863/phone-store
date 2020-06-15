import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from "../Context";
import PropTypes from 'prop-types';

export default class Product extends Component {

    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (

            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {(value) =>(
                             <div className="img-container  p-5 row justify-content-center"
                                onClick= { () => value.handleDetail(id) }
                                >
                                    <Link to="/details">
                                      <img src={img} alt="product" className="card-img-top" />
                                    </Link>
                                <div
                                   className = "cart-btn text-center"
                                   disabled= {inCart? true : false}
                                   onClick={()=> {value.addToCart(id);
                                                   value.openModal(id);
                                                } }
                                 >  ADD TO CART 
                                </div>   
                                <div className = "details-btn text-center"
                                    onClick={()=> {console.log("added to the cart!")}}>
                                       <Link to= "/details" style={{ textDecoration: 'inherit', color: 'inherit'}}>
                                           VIEW DETAILS 
                                      </Link>
                                </div> 
                             </div>   
                           )}
                           </ProductConsumer>
                                    {/* Card footer */}
                             <div className="card-footer d-flex justify-content-center">
                                  <p className=" mb-0 phone-title">
                                     {title}
                                  </p>
                                  <h5 className="price">
                                     <span className="mr-1 currency">R$</span>
                                     {price}
                                   </h5>
                             </div>
                </div>
              
            </ProductWrapper>
            
        );
    }
}

const ProductWrapper = styled.div`
.card{
    background: var(--mainWhite);
    transition: all 0.1s linear;
    box-shadow: 1px 1px 3px 0.5px rgba(0,0,0,0.08); 
   
}
.card-footer{
   
    border-top: transparent;
    transition: all 0.1s linear;
    background: var(--mainWhite);
}
&:hover{
    .card{
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 15px 0.5px rgba(0,0,0,0.2); 
        background: rgba(255, 255, 255, 0.8);
    }
    .card-footer{
        background: var(--navWhite);
      
    }
    .card-img-top{
        opacity: 30%;
    }
}
.image-container{
    position: relative;
    overflow: hidden;
    display: flex;
   
}
.card-img-top{
    transition: all 0.1s linear;
}

.cart-btn{
    position: absolute;
    width: 9rem;
    height: 3rem;
    padding: 0.6rem 0.4rem;
    background: var(--mainRed);
    border: var(--mainRed) solid;
    font-size: 1rem; 
    font-weight: bold;
    transition: all 1s linear;
    cursor: pointer;
    color: var(--mainWhite);
    display:none;
    transition: all 0.1s linear;
}

.img-container:hover .cart-btn{
    display: block;
}

.img-container:hover .details-btn{
    display: block;
    
}
.cart-btn:hover {
    background-color: var(--navWhite);
    color: var(--mainRed);
}

   
.details-btn{
    position: absolute;
    width: 9rem;
    height: 3rem;
    margin-top: 3.5rem;
    overflow: hidden;
    padding: 0.6rem 0.4rem;
    background: var(--mainRed);
    border: var(--mainRed) solid;
    color: "#f5eded";
    font-size: 1rem; 
    font-weight: bold; 
    transition: all 1s linear;
    cursor: pointer;
    color: var(--mainWhite);
    display:none;
    transition: all 0.1s linear;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    -webkit-transition: all 0.5s;
    transition: all 0.5s
} 
.details-btn:hover{
    background-color: var(--navWhite);
    color: var(--mainRed);
}
.card-footer{
    flex-direction: column;
}

.phone-title {
    text-align:center;
    display: block;
    font-size:1rem;
    color: var(--lightGrey)
}
.price{
    text-align:center;
    display: block;
    margin-top: 0.2rem;
    font-weight:bold;
    font-size: 1.5rem;
    
}
.currency{
    font-size: 1.2rem;
}



`;
Product.propTypes = {
product: PropTypes.shape({
id: PropTypes.number,
img: PropTypes.string,
title: PropTypes.string,
price: PropTypes.string,
inCart: PropTypes.bool
}).isRequired
};