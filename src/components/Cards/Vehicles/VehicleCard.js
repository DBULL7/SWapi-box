import React, { Component } from 'react';
import './VehicleCard.css';

class VehicleCard extends Component {
  constructor() {
    super()
    this.state = {
      favorited: false
    }
  }

  handleClick() {
    this.setState({
      favorited: !this.state.favorited
    });
    this.props.handleClick(this.props.info.name);
  }

    render() {
      return (
        <div className='vehicle'>
          <button className={this.state.favorited === true ? 'favorited' : ''}
                  onClick={() => this.handleClick() }> &hearts; </button>
          <p>{this.props.info.name}</p>
          <p>Model : {this.props.info.model}</p>
          <p>Class : {this.props.info.vehicle_class}</p>
          <p>Passengers : {this.props.info.passengers}</p>
        </div>
      )
    }
}

export default VehicleCard;
