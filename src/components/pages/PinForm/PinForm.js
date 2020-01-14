import React from 'react';
import './PinForm.scss';
import authData from '../../../helpers/data/authData';
import pinData from '../../../helpers/data/pinData';

class PinForm extends React.Component {
  state = {
    pinTitle: '',
    pinImageUrl: '',
  }

  componentDidMount() {
    const { pinId } = this.props.match.params;
    if (pinId) {
      pinData.getSinglePin(pinId)
        .then((myPin) => {
          const pin = myPin.data;
          this.setState({ pinTitle: pin.title, pinImageUrl: pin.imageUrl });
        }).catch((err) => console.error(err));
    }
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

  editPinEvent = (e) => {
    e.preventDefault();
    const { boardId, pinId } = this.props.match.params;
    const updatedPinObj = {
      imageUrl: this.state.pinImageUrl,
      title: this.state.pinTitle,
      uid: authData.getUid(),
      boardId,
    };
    pinData.updatePin(pinId, updatedPinObj)
      .then(() => {
        this.props.history.push(`/board/${boardId}`);
      }).catch((err) => console.error(err));
  }

  render() {
    const { pinTitle, pinImageUrl } = this.state;
    const { pinId } = this.props.match.params;

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
          {
            (pinId) ? (<button className='btn btn-dark' onClick={this.editPinEvent}>Update Pin</button>) : (<button className='btn btn-dark' onClick={this.savePinEvent}>Save Pin</button>)
          }
        </form>
      </div>
    );
  }
}

export default PinForm;
