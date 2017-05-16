import React from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';

import Guest from './Guest';
import Member from './Member';
import './index.css';
import logo from './logo.png';
import logoWhite from './logo-white.png';

@inject('user') @observer
class Application extends React.Component {

  guestOrMember() {
    const { user } = this.props;

    if (user.signedIn) {
      return (<Member />);
    }

    return (<Guest />);
  }

  render() {
    return (
      <div id='Layout' className='layout'>
        <div className='pure-menu pure-menu-horizontal pure-menu-fixed mainNav'>
          <Link to='/' className='pure-menu-heading heading'>
            <img src={logoWhite} alt='kips logo white' />
          </Link> 
          {this.guestOrMember()}
        </div>
        <div className='logo-header'>
          <img src={logo} className='logo' alt='kips logo' />
        </div>
      </div>
    );
  }
}

export default { Application };