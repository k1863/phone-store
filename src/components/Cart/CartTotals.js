import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function CartTotals({value}) {
    const { cartSubtotal, cartTax, cartTotal, clearCart } = value;

    return (
           <React.Fragment>
          <Wrapper className="container">
              <div className="row">
                  <div className="col-10 col-lg-7 ml-2 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize cart-sect">
                      <Link to ="/">
                        <button className= "btn btn-outline-danger text-uppercase mb-3 px-5 clear-cart-btn"
                         type="button"
                         onClick={ ()=> clearCart()}>
                             clear cart
                        </button>  
                      </Link>
                  
                      <h5 className="heading-title text-uppercase cart-totals mt-2">
                          <span className= "cart-text">subtotal:</span>  
                          <strong> R$ {cartSubtotal} </strong>
                      </h5>
                      <h5 className="heading-title cart-totals-tax mt-2 mb-2">
                          <span className= "cart-text-tax">tax:</span>  
                          <strong> R$ {cartTax} </strong>
                      </h5>
                      <h5 className="heading-title text-uppercase cart-totals font-weight-bold">
                          <span className="cart-text-total" >Total:</span>  
                          <strong> R$ {cartTotal} </strong>
                      </h5>
                  </div>
              </div>
          </Wrapper>
        </React.Fragment>
    
       
    );
}

const Wrapper = styled.nav`
  .cart-totals{
    padding: 10px 48px 10px 48px;
    background-color: var(--navWhite);
    background-size: 3rem;
    margin-right: 5rem;
    
  }
  .cart-sect{
    left: 1rem;
  }

  .cart-text{
   padding-right: 10rem;
   color: var(--lightGrey);
   font-weight: normal;
  }
  .cart-totals-tax{
    padding-left: 3rem;
    color: var(--lightGrey);
    font-weight: normal;

  }
  .cart-text-tax{
    padding-right: 13.4rem; 
  }

  .cart-text-total{
    padding-right: 11.9rem;
  }

  .clear-cart-btn{
    margin-left: 15rem;
  }

  .btn, .btn-outline-danger{
      background-color: transparent;
      border: solid #3e3636;
      color: #3e3636;
  }
  
  .btn-outline-danger:hover{
      background-color: var(--lightGrey);
      color: white;
  }
`

export default CartTotals;