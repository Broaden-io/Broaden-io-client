import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/rubrics';
import Rubric from './Rubric';

class Dashboard extends Component {


  getRubricById(id){
    this.props.getRubric(id);
  }

  componentWillMount() {
    this.props.getRubricById(10000);
  }

  getRubrics() {
    this.props.rubrics.rubricsList.map((rubric, index) => {
      return <Rubric name={rubric.name} key={index} />
    })
  }

  render() {
    return (

        <div className="main-panel">

          <div className="content">
            <div className="container-fluid">

              <footer className="footer">
                <div className="container-fluid">
                  <Rubric name={this.props.rubrics.rubricsList[0].name}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
