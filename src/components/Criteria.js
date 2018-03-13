import React, { Component } from 'react';
import * as Actions from '../actions/assessment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

class Criteria extends Component {

  constructor(props) {
    super(props);
  }

  handleCheck(e) {
    e.preventDefault();
    const { updateAssessment } = this.props.assessment.assessmentObject
    this.props.updateAssessment(this.props.assessment.assessmentObject, this.props.id)
  }

  render() {
    return(
      <tr>
        <td>
          <div className="checkbox">
            <label>
              <input type="checkbox" name="optionsCheckboxes"
                checked={this.props.answer}
                onChange={this.handleCheck.bind(this)}
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
