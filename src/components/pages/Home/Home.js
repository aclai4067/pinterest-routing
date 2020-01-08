import './Home.scss';
import React from 'react';
import boardData from '../../../helpers/data/boardData';
import authData from '../../../helpers/data/authData';
import Board from '../../shared/Board/Board';

class Home extends React.Component {
  state = {
    boards: [],
  }

  componentDidMount() {
    boardData.getBoardsByUid(authData.getUid())
      .then((boards) => {
        this.setState({ boards });
      }).catch((err) => console.error(err));
  }

  render() {
    return (
      <div className='Home'>
        <h1 className='m-4'>Home Page</h1>
        <div className='boards d-flex flex-wrap justify-content-around'>
          {this.state.boards.map((board) => <Board key={board.id} board={board} />)}
        </div>
      </div>
    );
  }
}

export default Home;
