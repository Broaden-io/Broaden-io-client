import React, { Component } from 'react';
import * as Actions from '../actions/assessment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

class Criteria extends Component {

  render() {
    return(
      <tr>
        <td>
          <div className="checkbox">
            <label>
              <input type="checkbox" name="optionsCheckboxes"
                checked={this.props.answer}
                onChange={this.props.handleCheck}
               />
            </label>
          </div>
        </td>
        <td>{this.props.text}</td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    assessment: state.assessment
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Criteria));
