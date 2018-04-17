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

const RubricSummaryPlain = withRouter(
  (props) => {
    return (
      <div className="card card-pricing card-plain">
        <div className="card-content">
          <h6 className="category">Freelancer</h6>
          <div className="icon">
            <i className="material-icons">weekend</i>
          </div>
          <h3 className="card-title">FREE</h3>
          <p className="card-description">
            This is good if your company size is between 2 and 10 Persons.
          </p>
          <a href="#pablo" className="btn btn-white btn-round">Choose Plan</a>
        </div>
      </div>
  )
})

const RubricSummaryRaised = withRouter(
  (props) => {
    return (
      <div className="card card-pricing card-raised">
        <div className="card-content">
          <h6 className="category">Small Company</h6>
          <div className="icon icon-rose">
            <i className="material-icons">home</i>
          </div>
          <h3 className="card-title">$29</h3>
          <p className="card-description">
            This is good if your company size is between 2 and 10 Persons.
          </p>
          <a href="#pablo" className="btn btn-rose btn-round">Choose Plan</a>
        </div>
      </div>
  )
})

class RubricSummary extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isHovered: false
    }
  }

  render() {



    return (

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
        return (<RubricElement key={index} index={index} name={rubric.name} rubricId={rubric.id} description={rubric.description} />)
      }).sort((a , b) => {
        return a.id - b.id;
      })
      return theRubes
    }
  }

  render() {
    return (

      <div className="wrapper">
        <div className="" >
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 text-center">
                  <h2 className="title">Pick a Roadmap to Master</h2>
                  <h5 className="description">Once you pick a skill we will take a </h5>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="card card-pricing card-plain">
                    <div className="card-content">
                      <h6 className="category">Freelancer</h6>
                      <div className="icon">
                        <i className="material-icons">weekend</i>
                      </div>
                      <h3 className="card-title">FREE</h3>
                      <p className="card-description">
                        This is good if your company size is between 2 and 10 Persons.
                      </p>
                      <a href="#pablo" className="btn btn-white btn-round">Choose Plan</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card card-pricing card-raised">
                    <div className="card-content">
                      <h6 className="category">Small Company</h6>
                      <div className="icon icon-rose">
                        <i className="material-icons">home</i>
                      </div>
                      <h3 className="card-title">$29</h3>
                      <p className="card-description">
                        This is good if your company size is between 2 and 10 Persons.
                      </p>
                      <a href="#pablo" className="btn btn-rose btn-round">Choose Plan</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card card-pricing card-plain">
                    <div className="card-content">
                      <h6 className="category">Medium Company</h6>
                      <div className="icon">
                        <i className="material-icons">business</i>
                      </div>
                      <h3 className="card-title">$69</h3>
                      <p className="card-description">
                        This is good if your company size is between 11 and 99 Persons.
                      </p>
                      <a href="#pablo" className="btn btn-white btn-round">Choose Plan</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card card-pricing card-plain">
                    <div className="card-content">
                      <h6 className="category">Enterprise</h6>
                      <div className="icon">
                        <i className="material-icons">account_balance</i>
                      </div>
                      <h3 className="card-title">$159</h3>
                      <p className="card-description">
                        This is good if your company size is 99+ persons.
                      </p>
                      <a href="#pablo" className="btn btn-white btn-round">Choose Plan</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          <footer className="footer">
            <div className="container">
              <nav className="pull-left">
                <ul>
                  <li>
                    <a href="#">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Company
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Portofolio
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>
              <p className="copyright pull-right">
                &copy;
                <script>
                  document.write(new Date().getFullYear())
                </script>
                <a href="http://www.creative-tim.com"> Creative Tim </a>, made with love for a better web
              </p>
            </div>
          </footer>
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
