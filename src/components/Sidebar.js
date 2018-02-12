import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (

      <div
        className="sidebar"
        data-active-color="rose"
        data-background-color="white"
        data-image="assets/img/sidebar-1.jpg">
        {/*
          Tip 1: You can change the color of active element of the sidebar using: data-active-color="purple | blue | green | orange | red | rose"
          Tip 2: you can also add an image using data-image tag
          Tip 3: you can change the color of the sidebar with data-background-color="white | black"
          */}
          <div className="logo">
            <a
              href="/"
              className="simple-text logo-mini">
              <span role="img" description="emoji" aria-label="emoji">🤯</span>
            </a>
            <a
              href="/"
              className="simple-text logo-normal">
              RubricPRO
            </a>
          </div>
          <div className="sidebar-wrapper">
            <div className="user">
              <div className="photo">
                <img alt="Rubric user" src="../../public/assets/img/faces/avatar.jpg" />
              </div>
              <div className="info">
                <a
                  data-toggle="collapse"
                  href="#collapseExample"
                  className="collapsed">
                  <span>
                    Adam Braus
                    <b className="caret" />
                  </span>
                </a>
                <div className="clearfix" />
                <div className="collapse" id="collapseExample">
                  <ul className="nav">
                    <li>
                      <a href="">
                        <span className="sidebar-mini"> MP </span>
                        <span className="sidebar-normal"> My Profile </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <span className="sidebar-mini"> EP </span>
                        <span className="sidebar-normal"> Edit Profile </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <span className="sidebar-mini"> S </span>
                        <span className="sidebar-normal"> Settings </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ul className="nav">
              <li className="active">
                <a href="./dashboard.html">
                  <i className="material-icons">dashboard</i>
                  <p> Dashboard </p>
                </a>
              </li>
              <li>
                <a data-toggle="collapse" href="#pagesExamples">
                  <i className="material-icons">image</i>
                  <p> Pages
                    <b className="caret" />
                  </p>
                </a>
                <div className="collapse" id="pagesExamples">
                  <ul className="nav">
                    <li>
                      <a href="./pages/pricing.html">
                        <span className="sidebar-mini"> P </span>
                        <span className="sidebar-normal"> Pricing </span>
                      </a>
                    </li>
                    <li>
                      <a href="./pages/rtl.html">
                        <span className="sidebar-mini"> RS </span>
                        <span className="sidebar-normal"> RTL Support </span>
                      </a>
                    </li>
                    <li>
                      <a href="./pages/timeline.html">
                        <span className="sidebar-mini"> T </span>
                        <span className="sidebar-normal"> Timeline </span>
                      </a>
                    </li>
                    <li>
                      <a href="./pages/login.html">
                        <span className="sidebar-mini"> LP </span>
                        <span className="sidebar-normal"> Login Page </span>
                      </a>
                    </li>
                    <li>
                      <a href="./pages/register.html">
                        <span className="sidebar-mini"> RP </span>
                        <span className="sidebar-normal"> Register Page </span>
                      </a>
                    </li>
                    <li>
                      <a href="./pages/lock.html">
                        <span className="sidebar-mini"> LSP </span>
                        <span className="sidebar-normal"> Lock Screen Page </span>
                      </a>
                    </li>
                    <li>
                      <a href="./pages/user.html">
                        <span className="sidebar-mini"> UP </span>
                        <span className="sidebar-normal"> User Profile </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  data-toggle="collapse"
                  href="#componentsExamples">
                  <i className="material-icons">apps</i>
                  <p> Components
                    <b className="caret" />
                  </p>
                </a>
                <div className="collapse" id="componentsExamples">
                  <ul className="nav">
                    <li>
                      <a href="./components/buttons.html">
                        <span className="sidebar-mini"> B </span>
                        <span className="sidebar-normal"> Buttons </span>
                      </a>
                    </li>
                    <li>
                      <a href="./components/grid.html">
                        <span className="sidebar-mini"> GS </span>
                        <span className="sidebar-normal"> Grid System </span>
                      </a>
                    </li>
                    <li>
                      <a href="./components/panels.html">
                        <span className="sidebar-mini"> P </span>
                        <span className="sidebar-normal"> Panels </span>
                      </a>
                    </li>
                    <li>
                      <a href="./components/sweet-alert.html">
                        <span className="sidebar-mini"> SA </span>
                        <span className="sidebar-normal"> Sweet Alert </span>
                      </a>
                    </li>
                    <li>
                      <a href="./components/notifications.html">
                        <span className="sidebar-mini"> N </span>
                        <span className="sidebar-normal"> Notifications </span>
                      </a>
                    </li>
                    <li>
                      <a href="./components/icons.html">
                        <span className="sidebar-mini"> I </span>
                        <span className="sidebar-normal"> Icons </span>
                      </a>
                    </li>
                    <li>
                      <a href="./components/typography.html">
                        <span className="sidebar-mini"> T </span>
                        <span className="sidebar-normal"> Typography </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#formsExamples">
                  <i className="material-icons">content_paste</i>
                  <p> Forms
                    <b className="caret" />
                  </p>
                </a>
                <div className="collapse" id="formsExamples">
                  <ul className="nav">
                    <li>
                      <a href="./forms/regular.html">
                        <span className="sidebar-mini"> RF </span>
                        <span className="sidebar-normal"> Regular Forms </span>
                      </a>
                    </li>
                    <li>
                      <a href="./forms/extended.html">
                        <span className="sidebar-mini"> EF </span>
                        <span className="sidebar-normal"> Extended Forms </span>
                      </a>
                    </li>
                    <li>
                      <a href="./forms/validation.html">
                        <span className="sidebar-mini"> VF </span>
                        <span className="sidebar-normal"> Validation Forms </span>
                      </a>
                    </li>
                    <li>
                      <a href="./forms/wizard.html">
                        <span className="sidebar-mini"> W </span>
                        <span className="sidebar-normal"> Wizard </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#tablesExamples">
                  <i className="material-icons">grid_on</i>
                  <p> Tables
                    <b className="caret" />
                  </p>
                </a>
                <div className="collapse" id="tablesExamples">
                  <ul className="nav">
                    <li>
                      <a href="./tables/regular.html">
                        <span className="sidebar-mini"> RT </span>
                        <span className="sidebar-normal"> Regular Tables </span>
                      </a>
                    </li>
                    <li>
                      <a href="./tables/extended.html">
                        <span className="sidebar-mini"> ET </span>
                        <span className="sidebar-normal"> Extended Tables </span>
                      </a>
                    </li>
                    <li>
                      <a href="./tables/datatables.net.html">
                        <span className="sidebar-mini"> DT </span>
                        <span className="sidebar-normal"> DataTables.net </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#mapsExamples">
                  <i className="material-icons">place</i>
                  <p> Maps
                    <b className="caret" />
                  </p>
                </a>
                <div className="collapse" id="mapsExamples">
                  <ul className="nav">
                    <li>
                      <a href="./maps/google.html">
                        <span className="sidebar-mini"> GM </span>
                        <span className="sidebar-normal"> Google Maps </span>
                      </a>
                    </li>
                    <li>
                      <a href="./maps/fullscreen.html">
                        <span className="sidebar-mini"> FSM </span>
                        <span className="sidebar-normal"> Full Screen Map </span>
                      </a>
                    </li>
                    <li>
                      <a href="./maps/vector.html">
                        <span className="sidebar-mini"> VM </span>
                        <span className="sidebar-normal"> Vector Map </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="./widgets.html">
                  <i className="material-icons">widgets</i>
                  <p> Widgets </p>
                </a>
              </li>
              <li>
                <a href="./charts.html">
                  <i className="material-icons">timeline</i>
                  <p> Charts </p>
                </a>
              </li>
              <li>
                <a href="./calendar.html">
                  <i className="material-icons">date_range</i>
                  <p> Calendar </p>
                </a>
              </li>
            </ul>
          </div>
        </div>

    );
  }
}

export default Sidebar;
