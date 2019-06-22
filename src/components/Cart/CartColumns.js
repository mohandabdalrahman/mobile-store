 import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block ">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-upperCase">
                        products
                    </p>
                </div>
                     <div className="col-10 mx-auto col-lg-2">
                    <p className="text-upperCase">
                        name of products
                    </p>
                </div>
                     <div className="col-10 mx-auto col-lg-2">
                    <p className="text-upperCase">
                        price
                    </p>
                </div>
                     <div className="col-10 mx-auto col-lg-2">
                    <p className="text-upperCase">
                        quantity
                    </p>
                </div>
                     <div className="col-10 mx-auto col-lg-2">
                    <p className="text-upperCase">
                        remove
                    </p>
                </div>
                  <div className="col-10 mx-auto col-lg-2">
                    <p className="text-upperCase">
                        total
                    </p>
                </div>
            </div>
        </div>
    )
}
