import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../logo.svg'
import {ButtonContainer} from './Button';
import styled from 'styled-components';
const Navbar = () => {
    return ( 
<NavWrapper className="navbar navbar-expand-sm navbar-dark bg-primary px-sm-5">
<Link to="/">
<img src={Logo} alt="Logo" className="navbar-brand"/>
</Link>
<ul className="navbar-nav align-items-center">

<li className="nav-item ml-5">

<Link className="nav-link" to='/'>Products</Link>
</li>
</ul>
<Link to="/cart" className="ml-auto">
<ButtonContainer>My Cart</ButtonContainer>
</Link>
</NavWrapper>

     );
}
 
export default Navbar;

const NavWrapper=styled.nav`
background:var(--mainColor);
.nav-link{
    text-transform: capitalize;
    font-size:1.3rem;
    color:var(--mainColor)
}


`