import React from 'react'
import {Link} from 'react-router-dom'
export default function CartTotals() {
    const {value}=this.props;
    const {cartSubTotal, cartTax, cartTotal,clearCart}=value
    return (
        <React.Fragment>
            <div className="conatiner">
                <div className="row">
                    <div
                     className="col-10 text-right mt-2 ml-sm-5 ml-md-auto col-sm-8">
<Link to="/">
<button 
className="btn btn-outline-danger mb-3 px-5"
onClick={()=>clearCart()}
>Clear Cart</button>
</Link>
<h5>
<span className="text-title">
subtotal:
</span>
<strong>$ {cartSubTotal}</strong>
</h5>

<h5>
<span className="text-title">
Tax:
</span>
<strong>$ {cartTax}</strong>
</h5>

<h5>
<span className="text-title">
cartTotal:
</span>
<strong>$ {cartTotal}</strong>
</h5>

                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}
