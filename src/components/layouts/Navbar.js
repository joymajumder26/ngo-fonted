import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className='navbar-fixed '>
        <nav>
          <div className='nav-wrapper teal'>
            <Link to='/' className='brand-logo hide-on-small-only'>
            Smile Care
            </Link>
            <Link
              to='/'
              className='brand-logo show-on-small hide-on-med-and-up'
            >
              TIFC Group
            </Link>

            <Link to='/' data-target='mobile-demo' className='sidenav-trigger'>
              <i className='material-icons'>menu</i>
            </Link>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/message'>Message</Link>
              </li>
              <li>
                <Link to='/education'>Education</Link>
              </li>
              <li>
                <Link to='/foodbank'>Food Bank</Link>
              </li>
              <li>
                <Link to='/socialwelfare'>Blood Donation</Link>
              </li>
             
              <li>
                <Link to='/womanempowerment'>Woman Empowerment</Link>
              </li>
              <li>
                <Link to='qurbani'>Qurbani</Link>
              </li>
              <li>
                <Link to='registration'>Registration</Link>
              </li>
              <li>
                <Link to='login'>Login</Link>
              </li>
              <li>

              </li>
            </ul>
          </div>
        </nav>
      </div>
      <ul className='sidenav ' id='mobile-demo'>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/message'>Message</Link>
        </li>
        <li>
          <Link to='/education'>Education</Link>
        </li>
        <li>
          <Link to='/foodbank'>Food Bank</Link>
        </li>
        <li>
                <Link to='/socialwelfare'>Blood Donation</Link>
              </li>
       
        <li>
          <Link to='/womanempowerment'>Woman Empowerment</Link>
        </li>
        <li>
          <Link to='qurbani'>Qurbani</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
