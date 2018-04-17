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
})

class RubricSummary extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isHovered: false
    }
    this.colors = ['primary', 'info', 'rose', 'warning', 'danger']
  }

  renderSummary() {
    const { index, rubric } = this.props
    const { name, iconName, description, id } = rubric
    const color = this.colors[index]
    // if (this.state.isHovered) {
      return (
        <div className="card card-pricing card-raised">
          <div className="card-content">
            <h6 className="category"><strong>{name}</strong></h6>
            <div className={`icon icon-${color}`}>
              <i className="material-icons">{iconName}</i>
            </div>
            <p className="card-description">
              {description}
            </p>
            <Link to={`/rubrics/${id}`} className={`btn btn-${color} btn-round`}>Choose Roadmap</Link>
          </div>
        </div>
      )
    // } else {
    //   return (
    //     <div className="card card-pricing card-plain">
    //       <div className="card-content">
    //         <h6 className="category">{name}</h6>
    //         <div className="icon">
    //           <i className="material-icons">{iconName}</i>
    //         </div>
    //         <p className="card-description">
    //           {description}
    //         </p>
    //         <a href="#pablo" className="btn btn-white btn-round">Choose Skill</a>
    //       </div>
    //     </div>
    //   )
    // }
  }

  render() {
    return (
      <div
        className="col-md-4"
        onMouseEnter={() => { this.setState({isHovered: true})}}
        onMouseLeave={() => { this.setState({isHovered: false})}} >
        {this.renderSummary()}
      </div>
    )
  }
}


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
        return (<RubricSummary key={index} index={index} rubric={rubric} />)
      }).sort((a , b) => {
        return a.id - b.id;
      })
      return theRubes
    }
  }

  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <h2 className="title">Pick a Roadmap to Master</h2>
              <h5 className="description">Once you pick a roadmap we will take you to an initial assessment so you how far you've already progressed</h5>
            </div>
          </div>
          <div className="row">
            {this.drawRubrics()}
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
