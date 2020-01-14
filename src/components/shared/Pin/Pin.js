import './Pin.scss';
import React from 'react';
import PropTypes from 'prop-types';
import pinShape from '../../../helpers/propz/pinShape';

class Pin extends React.Component {
  static propTypes = {
    pin: pinShape.pinShape,
    trashPin: PropTypes.func,
  }

  deletePinEvent = () => {
    const { trashPin, pin } = this.props;
    trashPin(pin.id);
  }

  render() {
    const { pin } = this.props;

    return (
      <div className='Pin col-3 m-2'>
        <div className='pinCards card'>
        <button className='deleteBtn btn btn-danger close' onClick={this.deletePinEvent}>X</button>
        <img className='card-img' src={pin.imageUrl} alt={pin.title} />
          <div className='card-body'>
            <h3 className='card-title'>{pin.title}</h3>
            <button className='btn btn-outline-light'>Edit Pin</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Pin;
