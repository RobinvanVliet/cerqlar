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

// const [isOpen, setIsOpen] = useState(false);

function Header (){
    return (
          <header className='header'>
            <div className='headerInner__Container'>
              <div className='container'>
              <a aria-label='Home' className='style__A'> 
                <div className='logo__Container'>
                    <img className='imageContainer__Container' src={logo} alt='Logo' loading='lazy'></img>
                  </div>
              </a>
              <nav className='nav__Container'>
                <ul className='nav__StyledList imoNsg'>
                    <li className='nav__StyledListItemLi fvxRIQ'>
                      <button className='nav__StyledItemButton kRUtAn'>
                        <p className='nav__P gzGplq iKbOGQ'>Solution</p>
                        <span className='nav__Span iRlbLq hxSdNL'>
                        <Arrow/>
                      </span>
                      </button>
                    </li>
                 
                    <li className='nav__StyledListItemLi fvxRIQ'>
                      <button className='nav__StyledItemButton kRUtAn'>
                        <p className='nav__P gzGplq iKbOGQ'>About</p>
                        <span color='#000000' className='style__Span iRlbLq hxSdNL'>
                        <Arrow/>
                      </span>
                      </button>
                    </li>
                      <ul className='nav__StyleListAfter cQZxtx'>
                      <li className='nav__StyleListAfterLi iQLKy0'>
                        <a className='nav__StyleListAfterA'>Overview</a>
                      </li>
                      <li className='nav__StyleListAfterLi iQLKy0'>
                        <a className='nav__StyleListAfterA'>Trades</a>
                      </li>
                      <li className='nav__StyleListAfterLi iQLKy0'>
                        <a className='nav__StyleListAfterA'>Contracts</a>
                      </li>
                      <li className='nav__StyleListAfterLi iQLKy0'>
                        <a className='nav__StyleListAfterA'>Inventory</a>
                      </li>
                    </ul>
                  </ul>
              </nav>
              </div>
            </div>
          </header> 
      );
    }

    export default Header;
