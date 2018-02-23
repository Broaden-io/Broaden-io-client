import React, { Component } from 'react';

class Dashboard extends Component {

  render() {
    return (

        <div className="main-panel">

          <div className="content">
            <div className="container-fluid">

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

export default Dashboard;
