import React, {useState} from 'react';
import { serviceDropdown } from './NavItems';
import {Link} from 'react-router-dom';
import './Dropdown.css'

function Dropdown () {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
    <ul 
      className={dropdown ?"service-submenu clicked" : "service-submenu" }
      onClick={() => setDropdown(!dropdown)}
    >
      {serviceDropdown.map(item =>{
        return(
          <li className="dropdown-text" key={item.id}>
            <Link 
              to={item.path} 
              className={item.cName}
              onClick={() => setDropdown(false)}
              >
              {item.title}
            </Link>
          </li>
        )
      })}
    </ul>
    </>
  )
}

export default Dropdown;