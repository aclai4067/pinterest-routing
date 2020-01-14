import './BoardForm.scss';
import React from 'react';
import authData from '../../../helpers/data/authData';
import boardData from '../../../helpers/data/boardData';


class BoardForm extends React.Component {
  state = {
    boardName: '',
    boardDescription: '',
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ boardName: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ boardDescription: e.target.value });
  }

  saveBoardEvent = (e) => {
    e.preventDefault();
    const newBoardObj = {
      name: this.state.boardName,
      description: this.state.boardDescription,
      uid: authData.getUid(),
    }
    boardData.saveBoard(newBoardObj)
      .then(() => {
        this.props.history.push('/');
      }).catch((err) => console.error(err));
  }

  render() {
    const { boardName, boardDescription } = this.state;

    return (
      <div className='BoardForm'>
        <h1 className='m-4'>Board Form</h1>
        <form className='col-6 offset-3'>
          <div className='form-group'>
            <label htmlFor='boardName'>Board Name</label>
            <input type='text' id='boardName' className='form-control ml-4' placeholder='Enter Board Name' value={boardName} onChange={this.nameChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='boardDescription'>Board Description</label>
            <input type='text' id='boardDescription' className='form-control ml-4' placeholder='Enter Board Description' value={boardDescription} onChange={this.descriptionChange} />
          </div>
          <button className='btn btn-dark' onClick={this.saveBoardEvent}>Save Board</button>
        </form>
      </div>
    );
  }
}

export default BoardForm;
