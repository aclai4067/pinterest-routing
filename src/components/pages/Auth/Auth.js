import './Auth.scss';
import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import googleIcon from './googCircleIcon.png';

class Auth extends React.Component {
  render() {
    return (
      <div className='Auth'>
        <h1>Auth Page</h1>
        <button className='btn btn-light mt-3 loginBtn'><img className='googIcon mr-2' src={googleIcon} alt='googleIcon' />Login with Google</button>
      </div>
    );
  }
}

export default Auth;
