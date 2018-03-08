import React, { Component } from 'react';
import * as Actions from '../actions/assessment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

class Criteria extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isChecked: this.props.answer
    }
  }

  handleCheck(e) {
    e.preventDefault();
    if (this.state.isChecked) {
      this.setState({
        isChecked: false
      }, () => {
        this.props.updateAssesment(this.props.assessment.assessmentObject, this.props.id)
      })
    } else {
      this.setState({
        isChecked: true
      }, () => {
        this.props.updateAssesment(this.props.assessment.assessmentObject, this.props.id)
      })
    }
  }

  render() {
    return(
      <tr>
        <td>
          <div className="checkbox">
            <label>
              <input type="checkbox" name="optionsCheckboxes"
                checked={this.state.isChecked}
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
