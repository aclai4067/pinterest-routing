import React from 'react';
import './PinForm.scss';
import authData from '../../../helpers/data/authData';
import pinData from '../../../helpers/data/pinData';

class PinForm extends React.Component {
  state = {
    pinTitle: '',
    pinImageUrl: '',
  }

  changeTitle = (e) => {
    e.preventDefault();
    this.setState({ pinTitle: e.target.value });
  }

  changeImageUrl = (e) => {
    e.preventDefault();
    this.setState({ pinImageUrl: e.target.value });
  }

  savePinEvent = (e) => {
    e.preventDefault();
    const { boardId } = this.props.match.params;
    const newPinObj = {
      imageUrl: this.state.pinImageUrl,
      title: this.state.pinTitle,
      uid: authData.getUid(),
      boardId,
    };
    pinData.savePin(newPinObj)
      .then(() => {
        this.props.history.push(`/board/${boardId}`);
      }).catch((err) => console.error(err));
  }

  render() {
    const { pinTitle, pinImageUrl } = this.state;
    return (
      <div className='PinForm'>
        <h1>Pin Form</h1>
        <form className='col-6 offset-3'>
          <div className='form-group'>
            <label htmlFor='pinTitle'>Pin Title</label>
            <input className='form-control' id='pinTitle' placeholder='Enter a Title' value={pinTitle} onChange={this.changeTitle} />
          </div>
          <div className='form-group'>
            <label htmlFor='pinImageUrl'>Pin Image URL</label>
            <input className='form-control' id='pinImageUrl' placeholder='Enter an Image Url (ends in .jpg, .png, .gif)' value={pinImageUrl} onChange={this.changeImageUrl} />
          </div>
          <button className='btn btn-dark' onClick={this.savePinEvent}>Save Pin</button>
        </form>
      </div>
    );
  }
}

export default PinForm;
