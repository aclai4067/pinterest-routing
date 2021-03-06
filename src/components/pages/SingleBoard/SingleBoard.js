import './SingleBoard.scss';
import React from 'react';
import { Link } from 'react-router-dom';
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

  trashPin = (pinId) => {
    const { boardId } = this.props.match.params;
    pinData.deletePin(pinId)
      .then(() => {
        this.getPinData(boardId);
      }).catch((err) => console.error(err));
  }

  render() {
    const { board } = this.state;
    const { boardId } = this.props.match.params;

    return (
      <div className='SingleBoard'>
        <h1 className='m-4'>{board.name}</h1>
        <h3 className='mb-4'>{board.description}</h3>
        <Link className='btn btn-dark' to={`/board/${boardId}/pin/new`}>Add a Pin</Link>
        <div className='d-flex flex-wrap justify-content-around'>
          {this.state.pins.map((pin) => <Pin key={pin.id} pin={pin} trashPin={this.trashPin} />)}
        </div>
      </div>
    );
  }
}

export default SingleBoard;
