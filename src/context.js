import React, {
  Component
} from "react";
import {
  storeProducts,
  detailProduct
} from "./data";
const ProductContext = React.createContext();
// it give us 2 components
// Provider component => to provide data to all applications
// Consumer component => consume data from every where in application
export default class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modelOpen: false,
    modelProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0

  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = {
        ...item
      };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return {
        products: tempProducts
      };
    });
  };

  getItem = id => {
    const product = this.state.products.find(product => product.id === id);
    return product;
  };
  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return {
        detailProduct: product
      };
    });
  };
  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(() => {
      return {
        products: tempProducts,
        cart: [...this.state.cart, product]
      }
    },()=>{
    this.addTotals()
    })

  };

  openModel = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return {
        modelProduct: product,
        modelOpen: true
      }
    })
  }

  closeModel = () => {
    this.setState({
      modelOpen: false
    })
  }

  increment = (id) => {
     let tempCart = [...this.state.cart];
     const selectedProduct=tempCart.find(item=>item.id===id);
     const index = tempCart.indexOf(selectedProduct);
     const product=tempCart[index];
     product.count+=1;
     product.total=product.price*product.count;
     this.setState(()=>{
       return{
         cart:[...tempCart]
       }
     },()=>{
       this.addTotals()
     })

  }

  decrement = (id) => {
     let tempCart = [...this.state.cart];
     const selectedProduct = tempCart.find(item => item.id === id);
     const index = tempCart.indexOf(selectedProduct);
     const product = tempCart[index];
     product.count -= 1;
     if(product.count===0){
       this.removeItem(id)
     } 
     else{
     product.total = product.price * product.count;
     this.setState(() => {
       return {
         cart: [...tempCart]
       }
     }, () => {
       this.addTotals()
     })
     }


  }

  removeItem = id => {
   let tempCart=[...this.state.cart];
   tempCart=tempCart.filter(item=>item.id!==id);
   let tempProducts=[...this.state.products];
   const index=tempProducts.indexOf(this.getItem(id));
   let removeProduct=tempProducts[index];
   removeProduct.inCart=false;
   removeProduct.count=0;
   removeProduct.total=0
   this.setState(()=>{
     return{
       products:[...tempProducts],
       cart:[...tempCart]
     }
   },()=>{
     this.addTotals()
   })

  }

  clearCart = () => {
    this.setState(()=>{
      return{
        cart:[]
      }
    },()=>{
      this.setProducts();
      this.addTotals();
    })
  }

  addTotals = () => {
    let subtotal = 0;
    this.state.cart.map(item => subtotal += item.total);
    const tempTax = subtotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subtotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subtotal,
        cartTax: tax,
        cartTotal: total

      }
    })
  }

  render() {
    return ( 
      <ProductContext.Provider value = {
        {
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModel: this.openModel,
          closeModel: this.closeModel,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }
      } >
      {
        this.props.children
      } 
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export {
  ProductProvider,
  ProductConsumer
};