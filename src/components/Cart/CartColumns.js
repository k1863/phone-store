import React from 'react';


export default function CartColumns() {
 return (
   <div id= "wrapper" className="mx-auto" style={{width: "1200px"}}>
       <div className="container-fluid text center d-none d-lg-block">
      <div className="row mt-4">
         
          <div className="col-10 mx-auto col-lg-2 ">
            <p className="text-uppercase font-weight-bold">name of product</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-capitalize font-weight-bold ml-4">price</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-capitalize font-weight-bold">quantity</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-capitalize font-weight-bold">total</p>
          </div>
          <div className="col-10 mx-4 col-lg-1">
            <p className="text-uppercase font-weight-bold"></p>
          </div>
      </div>
   </div>
   </div>
   
 );
}