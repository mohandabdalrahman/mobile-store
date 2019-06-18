import React, { Component } from 'react';
import {storeProducts,detailProduct} from './data'
const ProductContext=React.createContext();
// it give us 2 components
// Provider component => to provide data to all applications
// Consumer component => consume data from every where in application
export default class ProductProvider extends Component {
    state={
        products: storeProducts,
        detailProduct
    }

    handleDetail=()=>{
        console.log('hello from detail')
    }
    addToCart=()=>{
console.log('hello from add to cart')
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart
                }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer;

export {
    ProductProvider,
    ProductConsumer
}