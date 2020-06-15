import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';

export default class Modal extends Component{
  render() {
    return (
      <ProductConsumer>
         {value =>{
             const {modalOpen, closeModal} = value;
             const {img, title, price} = value.modalProduct;

             if(!modalOpen){
                 return null;
             }
             else {
                 return (
                     <ModalContainer>
                         <div className ="container">
                             <div className="row">
                                 <div id= "modal" className = "modal-sm mx-auto col-md-6 col-lg-4 text-center text-uppecase">

                                   <button type="button" className="close close-mod mt-1 ml-2 close-btn" data-dismiss="modal" aria-label="Close"
                                   onClick = {() => closeModal()}>
                                     <span aria-hidden="true">&times;</span>
                                     </button>
                                   <h5 className="mt-4  mb-2 modal-head text-uppercase">Phone added to the cart</h5>
   
                                     <img src ={img} className = "img-fluid" />
                                     <h5 className="price"> <span className="currency">R$</span>{price} </h5>
                                     <h5 className=""> {title} </h5>
                                    
                                     <Link to="/Cart">
                                       <button onClick = {() => closeModal()} className="mb-4 btn btn-outline-success cart-btn text-uppercase">
                                           View Cart
                                       </button>
                                     </Link>
                                 </div>

                             </div>
                         </div>
                     </ModalContainer>
                 );
             }
         }}
      </ProductConsumer>
    );
  };
};

const ModalContainer = styled.nav `
position: fixed;
background: rgba(0, 0, 0, 0.3);
display: flex;
align-items: center;
justify-content: center;
color: var(--lightGrey);
top: 0;
bottom: 0;
right: 0;
left: 0;


#modal{
    background: var(--mainWhite);
    border-radius:10px;
    position: relative;
 
}

.currency{
    font-size: 1.2rem;
}

.cart-btn{
    width: 12rem;
    border-color: var(--mainRed);
    color: var(--mainRed);
    font-size:0.8rem;
    font-weight: normal;
    font-family: 'Cabin', sans-serif !important;
    letter-spacing: 2px;

}

.close-btn{
    position: absolute;
    top:0;
    right: 16px;
}
.modal-head{
 font-family: 'Cabin', sans-serif !important;
font-size: 1rem;
font-weight: 400px;
color: var(--lightGrey);
letter-spacing: 1px;
}

.cart-btn:hover{
color: white;
background-color: var(--mainRed);
}

`