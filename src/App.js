import React,{Fragment} from 'react';
import {Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Details from './components/Details';
function App() {
  return (
<Fragment>
<Navbar/>
<Switch>
  <Route path='/' exact component={ProductList}/>
  <Route path='/details' component={Details}/>
  <Route path='/cart' component={Cart}/>
  <Route  component={Default}/>
</Switch>

</Fragment>
  );
}

export default App;
