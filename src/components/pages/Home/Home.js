import './Home.scss';
import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    const boardId = '12345';

    return (
      <div className='Home'>
        <h1>Home Page</h1>
        <Link className='btn btn-dark' to='/board/new'>Create New Board</Link>
        <Link className='btn btn-light' to={`/board/${boardId}`}>Visit Board {boardId}</Link>
      </div>
    );
  }
}

export default Home;
