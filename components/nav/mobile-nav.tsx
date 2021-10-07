import React from 'react';
import Link from 'next/link';

import { StyledMobileNav } from '../../styles/nav.styles';
import Dropdown from '../dropdown';
import AboutDropdown from '../aboutDropdown';

const MobileNav = () => {
  return (
    <StyledMobileNav>
      <div className='mobile-nav-container'>
        <ul className='linkList'>
          <li className='listItem'>
            <Dropdown />
          </li>

          <li className='listItem'>
            <Link href='/comics'>
              <a className='link'>Comics</a>
            </Link>
          </li>

          <li className='listItem'>
            <Link href='/scribbles'>
              <a className='link'>Scribbles</a>
            </Link>
          </li>

          <li className='listItem'>
            <AboutDropdown />
          </li>

          <li className='listItem'>
            <Link href='/comics'>
              <a className='link'>Legacy</a>
            </Link>
          </li>
        </ul>
      </div>
    </StyledMobileNav>
  );
};

export default MobileNav;
