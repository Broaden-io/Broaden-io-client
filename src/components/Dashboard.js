import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
      <div className="wrapper">

        <div className="main-panel">

          <div className="content">
            <div className="container-fluid">
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
                        Global Sales by Top Locations
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
                                  <td>USA</td>
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
              <div className="row">
                <div className="col-md-4">
                  <div className="card card-chart">
                    <div
                      className="card-header"
                      data-background-color="rose"
                      data-header-animation="true">
                      <div className="ct-chart" id="websiteViewsChart" />
                    </div>
                    <div className="card-content">
                      <div className="card-actions">
                        <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                          <i className="material-icons">build</i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-info btn-simple"
                          rel="tooltip"
                          data-placement="bottom"
                          title="Refresh">
                          <i className="material-icons">refresh</i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-default btn-simple"
                          rel="tooltip"
                          data-placement="bottom"
                          title="Change Date">
                          <i className="material-icons">edit</i>
                        </button>
                      </div>
                      <h4 className="card-title">
                        Website Views
                      </h4>
                      <p className="category">
                        Last Campaign Performance
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">access_time</i> campaign sent 2 days ago
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card card-chart">
                      <div
                        className="card-header"
                        data-background-color="green"
                        data-header-animation="true">
                        <div className="ct-chart" id="dailySalesChart" />
                      </div>
                      <div className="card-content">
                        <div className="card-actions">
                          <button
                            type="button"
                            className="btn btn-danger btn-simple fix-broken-card">
                            <i className="material-icons">build</i> Fix Header!
                            </button>
                            <button
                              type="button"
                              className="btn btn-info btn-simple"
                              rel="tooltip"
                              data-placement="bottom"
                              title="Refresh">
                              <i className="material-icons">refresh</i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-default btn-simple"
                              rel="tooltip"
                              data-placement="bottom"
                              title="Change Date">
                              <i className="material-icons">edit</i>
                            </button>
                          </div>
                          <h4 className="card-title">
                            Daily Sales
                          </h4>
                          <p className="category">
                            <span className="text-success"><i className="fa fa-long-arrow-up" /> 55% </span> increase in today sales.
                            </p>
                          </div>
                          <div className="card-footer">
                            <div className="stats">
                              <i className="material-icons">access_time</i> updated 4 minutes ago
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card card-chart">
                            <div
                              className="card-header"
                              data-background-color="blue"
                              data-header-animation="true">
                              <div
                                className="ct-chart"
                                id="completedTasksChart" />
                            </div>
                            <div className="card-content">
                              <div className="card-actions">
                                <button
                                  type="button"
                                  className="btn btn-danger btn-simple fix-broken-card">
                                  <i className="material-icons">build</i> Fix Header!
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-info btn-simple"
                                    rel="tooltip"
                                    data-placement="bottom"
                                    title="Refresh">
                                    <i className="material-icons">refresh</i>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-default btn-simple"
                                    rel="tooltip"
                                    data-placement="bottom"
                                    title="Change Date">
                                    <i className="material-icons">edit</i>
                                  </button>
                                </div>
                                <h4 className="card-title">
                                  Completed Tasks
                                </h4>
                                <p className="category">
                                  Last Campaign Performance
                                </p>
                              </div>
                              <div className="card-footer">
                                <div className="stats">
                                  <i className="material-icons">access_time</i> campaign sent 2 days ago
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                              <div className="card card-stats">
                                <div
                                  className="card-header"
                                  data-background-color="orange">
                                  <i className="material-icons">weekend</i>
                                </div>
                                <div className="card-content">
                                  <p className="category">Bookings</p>
                                  <h3 className="card-title">184</h3>
                                </div>
                                <div className="card-footer">
                                  <div className="stats">
                                    <i className="material-icons text-danger">warning</i>
                                    <a href="#pablo">
                                      Get More Space...
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                              <div className="card card-stats">
                                <div
                                  className="card-header"
                                  data-background-color="rose">
                                  <i className="material-icons">equalizer</i>
                                </div>
                                <div className="card-content">
                                  <p className="category">
                                    Website Visits
                                  </p>
                                  <h3 className="card-title">75.521</h3>
                                </div>
                                <div className="card-footer">
                                  <div className="stats">
                                    <i className="material-icons">local_offer</i> Tracked from Google Analytics
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card card-stats">
                                  <div
                                    className="card-header"
                                    data-background-color="green">
                                    <i className="material-icons">store</i>
                                  </div>
                                  <div className="card-content">
                                    <p className="category">Revenue</p>
                                    <h3 className="card-title">$34,245</h3>
                                  </div>
                                  <div className="card-footer">
                                    <div className="stats">
                                      <i className="material-icons">date_range</i> Last 24 Hours
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                  <div className="card card-stats">
                                    <div
                                      className="card-header"
                                      data-background-color="blue">
                                      <i className="fa fa-twitter" />
                                    </div>
                                    <div className="card-content">
                                      <p className="category">Followers</p>
                                      <h3 className="card-title">+245</h3>
                                    </div>
                                    <div className="card-footer">
                                      <div className="stats">
                                        <i className="material-icons">update</i> Just Updated
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <h3>
                                  Manage Listings
                                </h3>
                                <br />
                                <div className="row">
                                  <div className="col-md-4">
                                    <div className="card card-product">
                                      <div
                                        className="card-image"
                                        data-header-animation="true">
                                        <a href="#pablo">
                                          <img
                                            className="img"
                                            alt="card2"
                                            src="assets/img/card-2.jpeg" />
                                        </a>
                                      </div>
                                      <div className="card-content">
                                        <div className="card-actions">
                                          <button
                                            type="button"
                                            className="btn btn-danger btn-simple fix-broken-card">
                                            <i className="material-icons">build</i> Fix Header!
                                            </button>
                                            <button
                                              type="button"
                                              className="btn btn-default btn-simple"
                                              rel="tooltip"
                                              data-placement="bottom"
                                              title="View">
                                              <i className="material-icons">art_track</i>
                                            </button>
                                            <button
                                              type="button"
                                              className="btn btn-success btn-simple"
                                              rel="tooltip"
                                              data-placement="bottom"
                                              title="Edit">
                                              <i className="material-icons">edit</i>
                                            </button>
                                            <button
                                              type="button"
                                              className="btn btn-danger btn-simple"
                                              rel="tooltip"
                                              data-placement="bottom"
                                              title="Remove">
                                              <i className="material-icons">close</i>
                                            </button>
                                          </div>
                                          <h4 className="card-title">
                                            <a href="">
                                              Cozy 5 Stars Apartment
                                            </a>
                                          </h4>
                                          <div className="card-description">
                                            The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
                                          </div>
                                        </div>
                                        <div className="card-footer">
                                          <div className="price">
                                            <h4>$899/night</h4>
                                          </div>
                                          <div className="stats pull-right">
                                            <p className="category">
                                              <i className="material-icons">place</i> Barcelona, Spain
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="card card-product">
                                          <div
                                            className="card-image"
                                            data-header-animation="true">
                                            <a href="#pablo">
                                              <img
                                                className="img"
                                                alt="card3"
                                                src="assets/img/card-3.jpeg" />
                                            </a>
                                          </div>
                                          <div className="card-content">
                                            <div className="card-actions">
                                              <button
                                                type="button"
                                                className="btn btn-danger btn-simple fix-broken-card">
                                                <i className="material-icons">build</i> Fix Header!
                                                </button>
                                                <button
                                                  type="button"
                                                  className="btn btn-default btn-simple"
                                                  rel="tooltip"
                                                  data-placement="bottom"
                                                  title="View">
                                                  <i className="material-icons">art_track</i>
                                                </button>
                                                <button
                                                  type="button"
                                                  className="btn btn-success btn-simple"
                                                  rel="tooltip"
                                                  data-placement="bottom"
                                                  title="Edit">
                                                  <i className="material-icons">edit</i>
                                                </button>
                                                <button
                                                  type="button"
                                                  className="btn btn-danger btn-simple"
                                                  rel="tooltip"
                                                  data-placement="bottom"
                                                  title="Remove">
                                                  <i className="material-icons">close</i>
                                                </button>
                                              </div>
                                              <h4 className="card-title">
                                                <a href="">
                                                  Office Studio
                                                </a>
                                              </h4>
                                              <div className="card-description">
                                                The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.
                                              </div>
                                            </div>
                                            <div className="card-footer">
                                              <div className="price">
                                                <h4>$1.119/night</h4>
                                              </div>
                                              <div className="stats pull-right">
                                                <p className="category">
                                                  <i className="material-icons">place</i> London, UK
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-md-4">
                                            <div className="card card-product">
                                              <div
                                                className="card-image"
                                                data-header-animation="true">
                                                <a href="">
                                                  <img
                                                    className="img"
                                                    alt="card1"
                                                    src="assets/img/card-1.jpeg" />
                                                </a>
                                              </div>
                                              <div className="card-content">
                                                <div className="card-actions">
                                                  <button
                                                    type="button"
                                                    className="btn btn-danger btn-simple fix-broken-card">
                                                    <i className="material-icons">build</i> Fix Header!
                                                    </button>
                                                    <button
                                                      type="button"
                                                      className="btn btn-default btn-simple"
                                                      rel="tooltip"
                                                      data-placement="bottom"
                                                      title="View">
                                                      <i className="material-icons">art_track</i>
                                                    </button>
                                                    <button
                                                      type="button"
                                                      className="btn btn-success btn-simple"
                                                      rel="tooltip"
                                                      data-placement="bottom"
                                                      title="Edit">
                                                      <i className="material-icons">edit</i>
                                                    </button>
                                                    <button
                                                      type="button"
                                                      className="btn btn-danger btn-simple"
                                                      rel="tooltip"
                                                      data-placement="bottom"
                                                      title="Remove">
                                                      <i className="material-icons">close</i>
                                                    </button>
                                                  </div>
                                                  <h4 className="card-title">
                                                    <a href="#pablo">
                                                      Beautiful Castle
                                                    </a>
                                                  </h4>
                                                  <div className="card-description">
                                                    The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.
                                                  </div>
                                                </div>
                                                <div className="card-footer">
                                                  <div className="price">
                                                    <h4>$459/night</h4>
                                                  </div>
                                                  <div className="stats pull-right">
                                                    <p className="category">
                                                      <i className="material-icons">place</i> Milan, Italy
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <footer className="footer">
                                          <div className="container-fluid">
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
                                              ©
                                              <a href=""> RubricPro </a>, made with love to better education
                                              </p>
                                            </div>
                                          </footer>
                                        </div>
                                      </div>

                                    );
                                  }
                                }

                                export default Dashboard;
