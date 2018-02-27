import React, { Component } from 'react';

const Competency = props => {
  const {name, scales} = props;
  return (
    <div> Competency </div>
  )
}

class Rubric extends Component {

  constructor(props) {
    super(props);
    this.getCompetencies = this.getCompetencies.bind(this);
  }

  getCompetencies() {
    return this.props.competencies.map((competency, index) => {
      return <Competency key={index} name={competency.name} scales={competency.Scales}/>
    })
  }

  render() {
    return (

            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Full Stack Web Skills -
                    <small className="category">Make School's rubric for getting a job as a professional in full stack web</small>
                  </h4>
                </div>
                <div className="card-content">
                  <div className="row">
                    <div className="col-md-2">
                      <ul className="nav nav-pills nav-pills-icons nav-pills-rose nav-stacked" role="tablist">
                      <li className="active">
                        <a href="#dashboard-2" role="tab" data-toggle="tab" aria-expanded="true">
                          <i className="material-icons">dashboard</i> HTML & Templating
                        </a>
                      </li>
                      <li className="">
                        <a href="#schedule-2" role="tab" data-toggle="tab" aria-expanded="false">
                          <i className="material-icons">explore</i> CSS
                        </a>
                      </li>
                      <li className="">
                        <a href="#schedule-2" role="tab" data-toggle="tab" aria-expanded="false">
                          <i className="material-icons">code</i> Client-Side JavaScript
                        </a>
                      </li>
                      <li className="">
                        <a href="#schedule-2" role="tab" data-toggle="tab" aria-expanded="false">
                          <i className="material-icons">backup</i> Backend
                        </a>
                      </li>
                      <li className="">
                        <a href="#schedule-2" role="tab" data-toggle="tab" aria-expanded="false">
                          <i className="material-icons">lock</i> DevOps and Security
                        </a>
                      </li>
                      <li className="">
                        <a href="#schedule-2" role="tab" data-toggle="tab" aria-expanded="false">
                          <i className="material-icons">bug_report</i> Testing and Debugging
                        </a>
                      </li>
                      <li className="">
                        <a href="#schedule-2" role="tab" data-toggle="tab" aria-expanded="false">
                          <i className="material-icons">line_style</i> Databases
                        </a>
                      </li>
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

export default Rubric;
