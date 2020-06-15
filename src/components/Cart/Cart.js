import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../Context';
import CartList from './CartList';
import CartTotals from './CartTotals';


class Cart extends Component {
    render() {
        
        return (
            <ProductConsumer>
                {value => {
                    const {cart} = value;
                    if (cart.length>0){
                    return(
                        <React.Fragment>
                        <Title name= "My Shopping Basket" />
                         <CartColumns />
                         <CartList value={value} />
                         <CartTotals value={value} />
                       </React.Fragment> 
                    );
                      
                    }
                    else{
                        return <EmptyCart />;
                    }
                }}
          
             
            </ProductConsumer>
        );
    }
}

export default Cart;