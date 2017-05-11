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
    let allData = {
      name: this.props.info.name,
      model: this.props.info.model,
      class: this.props.info.vehicle_class,
      passengers: this.props.info.passengers
    }
    this.props.handleClick(allData);
  }

    render() {
      return (
        <div className='vehicle card'>
          <div className="card-title">
            <p>{this.props.info.name}</p>
            <button className={this.state.favorited === true ? 'favorited' : ''}
              onClick={() => this.handleClick() }> &hearts; </button>            
          </div>
          <p>Model : {this.props.info.model}</p>
          <p>Class : {this.props.info.vehicle_class}</p>
          <p>Passengers : {this.props.info.passengers}</p>
        </div>
      )
    }
}

export default VehicleCard;
