  import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';

const StyledButton = styled(IconButton)`
 font-size: 2.4rem !important;
  && :hover {
    color: var(--navWhite);
  }
`;


class NavBar extends Component {
    render() {
        return (
           <Navwrapper className="navbar navbar-expand-sm  navbar-light px-sm-5" >
               <Link to="/">
               <img  src={logo} className= "navbar-brand" width="110"
                  height="40" />
               </Link>

               <ul className="navbar-nav align-items-center d-flex product-nav">
                <li className="nav-item ml-5 products-link">
                  <Link to="/" className = "nav-link"  style={{ color: "#ffffff"}}>
                     PRODUCTS
                  </Link>
                </li>
               </ul>

               <Link to="Cart" className="ml-auto">
               <StyledButton  style={{ color: "#ffffff"}}  aria-label="add to shopping cart" >
                 <AddShoppingCartIcon style={{ fontSize: 30 }} />
                 </StyledButton>
               </Link>
          </Navwrapper>
        );
    }
}

const Navwrapper = styled.nav`
background: var(--lightGrey);
color: red;
font-size: 1rem;
text-transform: capitalize !important;

.products-link{
 flex-direction: column;
 overflow: hidden;

}

.product-nav{
  overflow: hidden;
}
.product-nav .products-link:hover {
  border-bottom: 3px solid red;
}

.product-nav .products-link .active {
  border-bottom: 3px solid red;
}
`



export default NavBar;
