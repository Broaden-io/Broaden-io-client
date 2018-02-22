import React, { Component } from 'react';

class Rubric extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div
              className="card-header card-header-icon"
              data-background-color="green">
              <i className="material-icons"></i>
            </div>
            <div className="card-content">
              <h4 className="card-title">
                {this.props.name}
              </h4>
              <div className="row">
                <div className="col-md-5">
                  <div className="table-responsive table-sales">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>
                            <div className="flag">
                              <img alt="US" src="assets/img/flags/US.png" />
                            </div>
                          </td>
                          <td></td>
                          <td className="text-right">
                            2.920
                          </td>
                          <td className="text-right">
                            53.23%
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flag">
                              <img alt="DE" src="assets/img/flags/DE.png" />
                            </div>
                          </td>
                          <td>Germany</td>
                          <td className="text-right">
                            1.300
                          </td>
                          <td className="text-right">
                            20.43%
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flag">
                              <img alt="AU" src="assets/img/flags/AU.png" />
                            </div>
                          </td>
                          <td>Australia</td>
                          <td className="text-right">
                            760
                          </td>
                          <td className="text-right">
                            10.35%
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flag">
                              <img alt="GB" src="assets/img/flags/GB.png" />
                            </div>
                          </td>
                          <td>
                            United Kingdom
                          </td>
                          <td className="text-right">
                            690
                          </td>
                          <td className="text-right">
                            7.87%
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flag">
                              <img alt="RO" src="assets/img/flags/RO.png" />
                            </div>
                          </td>
                          <td>Romania</td>
                          <td className="text-right">
                            600
                          </td>
                          <td className="text-right">
                            5.94%
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flag">
                              <img alt="BR" src="assets/img/flags/BR.png" />
                            </div>
                          </td>
                          <td>Brasil</td>
                          <td className="text-right">
                            550
                          </td>
                          <td className="text-right">
                            4.34%
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-md-6 col-md-offset-1">
                  <div id="worldMap" className="map" />
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
