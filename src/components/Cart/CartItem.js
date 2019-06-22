import React from 'react'

export default function CartItem(props) {
    const {item,value}=props;
const {id,title,img,price,total,count}=item;
const {increment,decrement,removeItem}=value
    return (
        <div className="row my-2 text-center">
           <div className="col-10 mx-auto col-lg-2">
               <img src={img}  alt="product" 
               style={{width:'5rem'}}
               className="img-fluid"
               />
           </div>
 <div className = "col-10 mx-auto col-lg-2">
     <span className="d-lg-none">product:{title}</span>
     </div>
      <div className = "col-10 mx-auto col-lg-2">
     <span className="d-lg-none">price:{price}</span>
     </div>
     <div className = "col-10 mx-auto my-2 col-lg-2">
<div className="d-flex justify-content-center">
    <div>
        <span className="btn btn-black mx-1"
         onClick={()=>decrement(id)}>-</span>

         <span className="btn-black mx-1">{count}</span>
         <span className="btn btn-black mx-1"
         onClick={()=>increment(id)}>+</span>
    </div>
</div>
         </div>
         <div className ="col-10 mx-auto col-lg-2">
    <div className="cart-item" onClick={()=>removeItem(id)}>
        <i className="fas fa-trach"></i>
    </div>
    </div>
<div className = "col-10 mx-auto col-lg-2">
    <strong>item total: ${total}</strong>
    </div>
        </div>
    )
}
