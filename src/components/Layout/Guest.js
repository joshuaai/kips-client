import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Guest = () =>
  <ul className='pure-menu-list'>
    <li className='pure-menu-item'>
      <Link to='/sign_in' className='pure-menu-link links'>Sign In</Link>
      <Link to='/sign_up' className='pure-menu-link links'>Sign Up</Link></li>
  </ul>;

export default Guest;