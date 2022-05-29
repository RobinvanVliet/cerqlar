import * as React from 'react';
import logo from './logo-light.svg';
import './Header.css';


export const Arrow = () =>{
  return (
    <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0)'>
      <path d="M18.652 12.414L21 10.069v3.172l-2.348 2.345-2.917 2.828V15.24l2.917-2.827zM10.826 17.655V2h2.348v18.897L12.036 22 3 13.241V10.07l7.826 7.586z"></path>
      </g>
    </svg>
  ) 
}

export default function Heade2(){
    const[isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);

return(
    <Main classname='header'>

    </Main>
    )
}