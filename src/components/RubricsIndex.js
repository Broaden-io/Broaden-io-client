import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/rubrics';

const RubricElement = props => {
  return (
    <div>
      <h4> {props.name} </h4>
    </div>
  )
}

class RubricsIndex extends Component {

  componentWillMount() {
    this.props.getRubrics();
  }

  getRubrics() {
    return this.props.rubrics.map((rubric, index) => {
      return <RubricElement key={index} name={rubric.name} />
    })
  }

  render() {
    return (
      <div>{this.getRubrics()}</div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    rubrics: state.rubrics
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RubricsIndex);
