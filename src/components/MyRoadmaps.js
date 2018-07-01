import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import * as Actions from '../actions/rubrics';
import mixpanel from 'mixpanel-browser';

const RubricElement = withRouter(
  (props) => {
    return (
      <Link to={`/rubrics/${props.rubricId}`} className="text-info" style={{letterSpacing: '1px'}}>

      <div className="card">
        <div className="card-header card-header-icon" data-background-color="rose">
          <i className="material-icons">{props.iconName}</i>
        </div>
        <div className="card-content">
          <h4 className="card-title">{props.name}</h4>
          <p>{props.description}</p>
        </div>
      </div>
      </Link>
    )
  }
)

class RubricsIndex extends Component {

  componentWillMount() {
    this.props.getRubrics();
  }

  componentDidMount() {
    mixpanel.init('333f6269317ae9b78a29c535e29f00bf')
    mixpanel.track("Rubrics Index Component Page");
  }

  drawRubrics() {
    const { rubrics } = this.props.rubrics

    if (rubrics.length !== 0) {
       const theRubes = rubrics.map((rubric, index) => {
        return (<RubricElement key={index} index={index} name={rubric.name} rubricId={rubric.id} description={rubric.description} iconName={rubric.iconName}/>)
      }).sort((a , b) => {
        return a.id - b.id;
      })
      return theRubes
    }
  }

  render() {
    return (
      <div className="col-sm-9 col-md-7 col-lg-5">
        <h2 >Your Roadmaps</h2>
        {this.drawRubrics()}
        <div className="card">
          <div className="card-content">
            <i className="material-icons">add</i>
            <h4 className="card-title">Add a New Roadmap</h4>

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
