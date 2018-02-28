import React, { Component } from 'react';
import * as Actions from '../actions/rubric';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Competency = props => {
  return (
    <li className={props.isActive}
      onClick={() => {
        props.setActiveComp(props.i)
      }}>
      <a href="#dashboard-2" role="tab" data-toggle="tab" aria-expanded="true">
        <i className="material-icons">dashboard</i> {props.name}
      </a>
    </li>
  )
}

class Rubric extends Component {

  constructor(props) {
    super(props);
    this.getCompetencies = this.getCompetencies.bind(this);
    this.state = {
      activeCompetencyIndex: 0
    }
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.getRubricById(id);
  }

  setActiveComp(index) {
    this.setState({
      activeCompetencyIndex: index
    })
  }

  getCompetencies() {
    if (this.props.rubric.Competencies) {
      return this.props.rubric.Competencies.map((comp, index) => {
        var isActiveClass = "";
        if (index === 0) {
          isActiveClass = "active";
        }
        return <Competency
          name={comp.name}
          key={index}
          i={index}
          isActive={isActiveClass}
          setActiveComp={this.setActiveComp.bind(this)} />
      })
    }
  }

  render() {
    return (

      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title"> {this.props.rubric.name + " "}
              <small className="category">{this.props.rubric.description}</small>
            </h4>
          </div>
          <div className="card-content">
            <div className="row">
              <div className="col-md-2">
                <ul className="nav nav-pills nav-pills-icons nav-pills-rose nav-stacked" role="tablist">
                  {this.getCompetencies()}
                </ul>
            </div>
            <div className="col-md-10">
              <div className="tab-content">
                <div className="tab-pane active" id="dashboard-2">
                  <div className="col-md-3">
                    <h3>Initial</h3>
                    <hr />
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" name="optionsCheckboxes" defaultChecked="" />
                            </label>
                          </div>
                        </td>
                        <td>Can write the basic HTML boilerplate from memory</td>

                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" name="optionsCheckboxes" defaultChecked=""/>
                            </label>
                          </div>
                        </td>
                        <td>Needs to look up tags occasionally from documentation</td>

                      </tr>

                    </tbody>
                  </table>
                </div>
                <div className="col-md-3">
                  <h3>Approaching</h3>
                  <hr />
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" name="optionsCheckboxes" defaultChecked="" />
                          </label>
                        </div>
                      </td>
                      <td>Can write basic and advanced HTML tags from memory</td>

                    </tr>
                    <tr>
                      <td>
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" name="optionsCheckboxes" />
                          </label>
                        </div>
                      </td>
                      <td>Indentation is flawless</td>

                    </tr>
                    <tr>
                      <td>
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" name="optionsCheckboxes" defaultChecked="" />
                          </label>
                        </div>
                      </td>
                      <td>Has experience with one templating engine</td>

                    </tr>

                  </tbody>
                </table>
              </div>
              <div className="col-md-3">
                <h3>Overtaking</h3>
                <hr />

              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" name="optionsCheckboxes" />
                        </label>
                      </div>
                    </td>
                    <td>Uses HTML tags semantically, e.g. uses structural tags (section, header, footer, article, etc.)</td>

                  </tr>
                  <tr>
                    <td>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" name="optionsCheckboxes" />
                        </label>
                      </div>
                    </td>
                    <td>Has experience with a few templating engines</td>

                  </tr>
                  <tr>
                    <td>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" name="optionsCheckboxes" />
                        </label>
                      </div>
                    </td>
                    <td>Can use advanced HTML tags such as meta tags, title tags, and optimize page load time</td>

                  </tr>

                </tbody>
              </table>
            </div>
            <div className="col-md-3">
              <h3>Innovating</h3>
              <hr />
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="optionsCheckboxes" />
                      </label>
                    </div>
                  </td>
                  <td>Has experience and expertise with multiple templating engines</td>

                </tr>
                <tr>
                  <td>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="optionsCheckboxes" />
                      </label>
                    </div>
                  </td>
                  <td>Has manipulated and written HTML programmatically</td>

                </tr>

              </tbody>
            </table>
          </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    rubric: state.rubric
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Rubric);
