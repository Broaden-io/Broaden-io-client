import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <nav className="pull-left">
            <ul>
              {/*<li>
                    <a href="">
                          Home
                    </a>
                   </li>
                   <li>
                     <a href="">
                        Mission
                     </a>
                   </li>
                   <li>
                    <a href="">
                      Blog
                    </a>
                    </li>
                    <li>
                      <a href="">
                        Contact
                      </a>
                    </li>*/}
            </ul>
          </nav>
          <p className="copyright pull-right">
                  © <a href="/"> Broaden.io </a>, made with love by students at Make School
          </p>
        </div>
      </footer>


    );
  }
}

export default Footer;
