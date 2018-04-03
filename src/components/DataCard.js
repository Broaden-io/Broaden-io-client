import React, { Component } from 'react';

class DataCard extends Component {

  state = {
    category: this.props.category,
    mainText: this.props.mainText,
    footerText: this.props.footerText
  }

  render() {
    return(
      <div className="card card-stats">
        <div className="card-header" data-background-color={this.props.color || "blue"}>
          <i className="material-icons">{this.props.icon}</i>
        </div>
        <div className="card-content">
          <p className="category">{this.state.category}</p>
          <h3 className="card-title">{this.state.mainText}</h3>
        </div>
        <div className="card-footer">
          <div className="stats">
            <i className="material-icons">{this.props.footerIcon}</i>
            {this.state.footerText}
          </div>
        </div>
      </div>
    );
  }
}

export default DataCard;
