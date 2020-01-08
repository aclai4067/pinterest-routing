import './Board.scss';
import React from 'react';
import boardShape from '../../../helpers/propz/boardShape';

class Board extends React.Component {
  static propTypes = {
    board: boardShape.boardShape,
  }

  render() {
    const { board } = this.props;

    return (
      <div className='Board col-4 p-2'>
        <div className='boardCards card'>
          <div className='card-body'>
            <h3 className='card-title'>{board.name}</h3>
            <p className='card-text'>{board.description}</p>
            <button className='btn btn-light mr-2'>View Pins</button>
            <button className='btn btn-outline-light'>Edit Board</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
