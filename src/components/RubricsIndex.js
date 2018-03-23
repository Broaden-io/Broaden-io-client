import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import * as Actions from '../actions/rubrics';

const RubricElement = withRouter(
  (props) => {
    return (
      <tr>
        <td>
          <div>
            <Link to={`/rubrics/${props.rubricId}`} className="text-info" style={{letterSpacing: '1px'}}>
              <h4 style={{ fontWeight: 400 }}>{props.name}</h4>
            </Link>
          </div>
        </td>
        <td> {props.description} </td>
      </tr>
    )
  }
)

class RubricsIndex extends Component {

  componentWillMount() {
    this.props.getRubrics();
  }

  drawRubrics() {
    if (this.props.rubrics !== null && this.props.rubrics !== {}) {
       const theRubes = this.props.rubrics.map((rubric, index) => {
        return (<RubricElement key={index} index={index} name={rubric.name} rubricId={rubric.id} description={rubric.description} />)
      }).sort((a , b) => {
        return a.id - b.id;
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
            <h4 className="card-title">Please pick a goal or skill that you'd like to track...</h4>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th><h2 style={{ marginTop: 0 }}><small>Name</small></h2></th>
                    <th><h2 style={{ marginTop: 0 }}><small>Description</small></h2></th>
                  </tr>
                </thead>
                <tbody>
                  {this.drawRubrics()}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RubricsIndex));
