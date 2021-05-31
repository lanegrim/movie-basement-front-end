import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render = () => {
    return (
      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* Column1*/}
            <div className="col">
              <h4>Lane Grimaud</h4>
              <a href="https://GitHub.com/lanegrim">
                <i className="fab fa-github-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/lanegrimaud">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            {/* Column2*/}
            <div className="col">
              <h4>Devante Gandy</h4>
              <a href="https://GitHub.com/devantegandy">
                <i className="fab fa-github-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/devantegandy/">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            {/* Column3*/}
            <div className="col">
              <h4>Kausar Akther</h4>
              <a href="https://github.com/">
                <i className="fab fa-github-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/kausarakther/">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Footer;
