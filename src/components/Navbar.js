import { useState } from 'react';
import {Link} from 'react-router-dom';
import Dropdown from './Dropdown';
import './Navbar.css';
import { navItems } from './NavItems';
import logo from './logo-light.svg';
import IntroBlock from './IntroBlock';
import styled from 'styled-components';
import { COLORS } from '../theme/basics/colors';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const [dropdown, setDropdown] = useState(false);
    return(
        <>
          <Background>
            <NavBar>
          <Link to="" className="navbar-logo">
            <img className='logoContainer' src={logo} alt='Logo' loading='lazy'></img>
          </Link>
          <div className="container"> 
            <ul className="nav-items">
              {navItems.map((item) => {
                if(item.title === "Solution"){
                  return (
                    <li key={item.id} className={item.cName}
                        onMouseEnter={() => setDropdown(true)} 
                        onMouseLeave={() => setDropdown(true)}>
                      <Link 
                        to={item.path} 
                        >
                          {item.title}
                      </Link>
                       {dropdown && <Dropdown/>} 
                      {/* <Arrow/> */}
                    </li>
                  );
                }
                return (
                <li key={item.id} className={item.cName}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
                )
              })}
            </ul>
            </div> 
           </NavBar>
          </Background>
        </>
    )
}

const Background = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 3;
  height: 12.8rem;
`;

const NavBar = styled.div`
  color: white;
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;  
`;

export default Navbar;