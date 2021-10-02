import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Buton';
import './NavBar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);



  window.addEventListener('resize', showButton);
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/airquality' className='nav-links' onClick={closeMobileMenu}>
                Air Quality
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/transport' className='nav-links' onClick={closeMobileMenu}>
                Public Transport
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/parkoptimiser' className='nav-links' onClick={closeMobileMenu}>
                Green Areas
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/slums' className='nav-links' onClick={closeMobileMenu}>
                Slums
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' links='/'>Home</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
