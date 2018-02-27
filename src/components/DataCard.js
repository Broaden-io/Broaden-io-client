import React, { Component } from 'react';

class DataCard extends Component {

  state = {
    category: this.props.category,
    mainText: this.props.mainText,
    footerText: this.props.footerText
  }

  render() {
    return(
      <div class="card card-stats">
        <div class="card-header" data-background-color={this.props.color || "blue"}>
          <i class="material-icons">{this.props.icon}</i>
        </div>
        <div class="card-content">
          <p class="category">{this.state.category}</p>
          <h3 class="card-title">{this.state.mainText}</h3>
        </div>
        <div class="card-footer">
          <div class="stats">
            <i class="material-icons">{this.props.footerIcon}</i>
            {this.state.footerText}
          </div>
        </div>
      </div>
    );
  }
}

export default DataCard;
