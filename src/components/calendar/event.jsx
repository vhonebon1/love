import React from 'react';
import UpArrow from '../../images/up_arrow.svg';
import DownArrow from '../../images/down_arrow.svg';

class Event extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  toggle = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { name, dress, date } = this.props;
    return(
      <div className="button">
        <div className="buttonInner">
          <div>{name}</div>
          <img className="arrow" onClick={() => this.toggle()} src={this.state.open ? UpArrow : DownArrow} alt=""/>
        </div>
        { this.state.open &&
          <React.Fragment>
            { dress && <div className="buttonInner">dress code: {dress}</div> }
            <div className="buttonInner">date: TBC</div>
          </React.Fragment>
        }
      </div>
    )
  }
}

export default Event;
