import './Board.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import boardShape from '../../../helpers/propz/boardShape';

class Board extends React.Component {
  static propTypes = {
    board: boardShape.boardShape,
    deleteBoard: PropTypes.func,
  }

  deleteBoardEvent = () => {
    const { deleteBoard, board } = this.props;
    deleteBoard(board.id);
  }

  render() {
    const { board } = this.props;

    return (
      <div className='Board col-4 p-2'>
        <div className='boardCards card'>
          <div className='card-body'>
            <button className='btn btn-danger close' onClick={this.deleteBoardEvent}>X</button>
            <h3 className='card-title'>{board.name}</h3>
            <p className='card-text'>{board.description}</p>
            <Link className='btn btn-light mr-2' to={`/board/${board.id}`}>View Pins</Link>
            <button className='btn btn-outline-light'>Edit Board</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
