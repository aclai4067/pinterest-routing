import './Pin.scss';
import React from 'react';
import pinShape from '../../../helpers/propz/pinShape';

class Pin extends React.Component {
  static propTypes = {
    pin: pinShape.pinShape,
  }

  render() {
    const { pin } = this.props;

    return (
      <div className='Pin col-3 m-2'>
        <div className='pinCards card'>
        <img className='card-img' src={pin.imageUrl} alt={pin.title} />
          <div className='card-body'>
            <h3 className='card-title'>{pin.title}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Pin;
