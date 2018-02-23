import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/rubrics';

class RubricElement extends Component {
  render() {
    return (
      <tr>
        <td className="text-center">this.props.index</td>
        <td>{this.props.name}</td>
        <td>{this.props.description}</td>
      </tr>
    )
  }
}

class RubricsIndex extends Component {

  componentWillMount() {
    this.props.getRubrics();
  }

  drawRubrics() {
    console.log('RUBRICS', this.props)
    if (!this.props.isFetching) {
       const theRubes = this.props.rubrics.map((rubric, index) => {
        return (<RubricElement key={index} index={index} name={rubric.name} description={rubric.description} />)
      })
      return theRubes
    }
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="card">
          <div className="card-header card-header-icon" data-background-color="rose">
            <i className="material-icons">assignment</i>
          </div>
          <div className="card-content">
            <h4 className="card-title">Rubrics</h4>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th>Name</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {this.drawRubrics}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rubrics: state.rubrics,
    isFetching: state.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RubricsIndex);
