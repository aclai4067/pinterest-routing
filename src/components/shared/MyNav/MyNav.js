import './MyNav.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import PropTypes from 'prop-types';

class MyNav extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  logoutEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const buildNavbar = () => {
      const { authed } = this.props;
      if (authed) {
        return (
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>Boards</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/board/new'>New Board</Link>
            </li>
            <li className='nav-item'>
              <button className="logout btn btn-warning ml-1 my-2 my-sm-0" onClick={this.logoutEvent}>Log Out</button>
            </li>
          </ul>
        );
      }
      return (<ul className='navbar-nav ml-auto'>></ul>);
    };

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Pinterest</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          { buildNavbar() }
        </div>
      </nav>
    );
  }
}

export default MyNav;
