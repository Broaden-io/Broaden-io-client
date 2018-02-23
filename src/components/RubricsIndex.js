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
      return <RubricElement name={rubric.name} />
    })
  }

  render() {
    return (

        <div className="main-panel">
          <div className="content">
            <div className="container-fluid">

              <footer className="footer">
                <div className="container-fluid">
                  {this.getRubrics()}
                    <nav className="pull-left">
                        <ul>
                          <li>
                            <a href="">
                                  Home
                            </a>
                           </li>
                           <li>
                             <a href="">
                                Company
                             </a>
                           </li>
                           <li>
                            <a href="">
                              Portofolio
                            </a>
                            </li>
                            <li>
                              <a href="">
                                Blog
                              </a>
                            </li>
                          </ul>
                        </nav>
                        <p className="copyright pull-right">
                          © <a href=""> RubricPro </a>, made with love to better education
                        </p>
                    </div>
                  </footer>
                </div>
              </div>
            </div>

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
