import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

function CartItem({item,value}) {
    const {id, title, img, price, total, count} = item;
    const {increment, decrement, removeItem} = value;
    return (
      <div id = "wrapper" className="mx-auto" style={{width: "1200px"}}>
          <hr></hr>
        <div className="container" style= {{maxWidth: "100%", display: "block"}}>
        <div className="row my-3 text-capitalize text-center">
          
          <div className="col-10 mx-auto col-lg-2">
            <span>
            <img src={img} style={{width:"3rem", height:"3rem"}} className="img-fluid" alt="product" />
            </span>
            <span className="d-lg-none">product:</span>
            {title}
          </div>
          <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none"> price:</span>
          {price}
          </div>
          <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
            <div>
                <div >
                   <span className="btn btn-black mx-1" onClick={ ()=> decrement(id)}>-</span>
                   <span className="btn btn-black mx-1">{count}</span>
                   <span className="btn btn-black mx-1" onClick={ ()=> increment(id)}>+</span>
                </div> 
            </div>
          </div>
          <div className= "col-10 mx-auto col-lg-2">
               <strong>R${total}</strong>
          </div>
          <div className= "col-10 mx-auto col-lg-2">
              <div onClick={()=> removeItem(id)}>
                <DeleteIcon  className="cart-icon mx-auto" style={{color: "var(--mainRed)"}} ></DeleteIcon>
              </div>
          </div>
        </div>
        </div>
        <hr></hr>
      </div>
        
    );
}

export default CartItem;