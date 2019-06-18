import styled from 'styled-components';
export const ButtonContainer = styled.button `
 text-transform: capitalize;
 font-size: 1.4 rem;
 background: transparent;
 border: 0.05 rem solid
 var (--lightBlue);
 color: var (--lightBlue);
 border-radius: 0.5 rem; 
 padding: 0.2 rem 0.5 rem;
 margin: 0.2 rem 0.5 rem 0.2 rem 0;
 transition: all 0.5 s ease - in -out; -
 &:hover {
     background: var (--lightBlue);
     color: var (--mainColor)
 } &:focus {
     outline: none
 }
`