import './SingleBoard.scss';
import React from 'react';

class SingleBoard extends React.Component {
  render() {
    const { boardId } = this.props.match.params;
    return (
      <div className='SingleBoard'>
        <h1>Single Board Page</h1>
        <h2>Current Board Id is {boardId}</h2>
      </div>
    );
  }
}

export default SingleBoard;
