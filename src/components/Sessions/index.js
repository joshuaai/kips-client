import React from 'react';
import { observer, inject } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import Nav from '../Layout';
import './index.css';

@inject('user') @observer
class New extends React.Component {

  submitForm = (e) => {
    e.preventDefault();
    const { user } = this.props;
    user.signIn(this.email.value, this.password.value,);
  } 

  render() {
    if (this.props.user.signedIn) {
      return (
        <Redirect to='/categories' />
      )
    }
    return (
      <div className='session'>
        <Nav.Application />
        <div className='signInForm'>
          <form className='pure-form pure-form-stacked' onSubmit={this.submitForm}>
            <label>Email</label>
            <input type='email' ref={node => { this.email = node; }}
                  placeholder='email' className='pure-input-1' />
            <label>Password</label>
            <input type='password' ref={node => { this.password = node; }} className='pure-input-1'/>
            <button className='pure-button pure-input-1 signInButton'>
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default { New };