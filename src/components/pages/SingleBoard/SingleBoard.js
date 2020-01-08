import './SingleBoard.scss';
import React from 'react';
import boardData from '../../../helpers/data/boardData';
import pinData from '../../../helpers/data/pinData';
import Pin from '../../shared/Pin/Pin';

class SingleBoard extends React.Component {
  state = {
    board: {},
    pins: [],
  }

  getPinData = (boardId) => {
    pinData.getPinsByBoardId(boardId)
      .then((pins) => {
        this.setState({ pins });
      }).catch((err) => console.error(err));
  }

  componentDidMount() {
    const { boardId } = this.props.match.params;
    boardData.getSingleBoard(boardId)
      .then((board) => {
        this.setState({ board: board.data });
        this.getPinData(boardId);
      }).catch((err) => console.error(err));
  }

  render() {
    const { board } = this.state;
    return (
      <div className='SingleBoard'>
        <h1 className='m-4'>{board.name}</h1>
        <h3 className='mb-4'>{board.description}</h3>
        <div className='d-flex flex-wrap justify-content-around'>
          {this.state.pins.map((pin) => <Pin key={pin.id} pin={pin} />)}
        </div>
      </div>
    );
  }
}

export default SingleBoard;
