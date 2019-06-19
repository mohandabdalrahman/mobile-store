import styled from 'styled-components';
export const ButtonContainer = styled.button `
 text-transform: capitalize;
 font-size: 1.4 rem;
 background: transparent;
 border: 0.05 rem solid var (--lightBlue);
 color: ${props=>(props.cart?"var(--mainYellow)":"var(--lightBlue)")};
 border-color:${props=>(props.cart?"var(--mainYellow)":"var(--lightBlue)")};
 border-radius: 0.5 rem; 
 padding: 0.2rem 0.5rem;
 margin: 0.2rem 0.5rem 0.2rem 0;
 transition: all 0.5s ease-in-out; 
 &:hover {
     background: ${props=>(props.cart?"var(--mainYellow)":"var(--lightBlue)")};
     color:#fff
 } &:focus {
     outline: none
 }
`