import React, { Component } from "react";

class Impact extends Component {
  render() {
    return (
      <div id="skills" className="offset">
        <div className="jumbotron m-0 py-5">
          <div className="container">
            <div
              className="col-12 os-animation"
              data-animation="animate__animated animate__fadeInUp"
            >
              <h3 className="heading">Our Skills</h3>
              <div className="heading-underline"></div>
            </div>

            <div
              className="row justify-content-center text-center os-animation"
              data-animation="animate__animated animate__fadeInUp"
            >
              <div className="col-md-9 col-lg-12 col-xl-11">
                <div className="row">
                  <div className="col-md-6 col-lg-3">
                    <span className="fa-stack fa-3x">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fas fa-clock fa-stack-1x fa-inverse"></i>
                    </span>
                    <h1 className="text-nuno font-weight-bold py-1">
                      <span className="counter">457</span>
                    </h1>
                    <h4 className="text-uppercase font-weight-bold">
                      Class Minutes
                    </h4>
                  </div>

                  <div className="col-md-6 col-lg-3">
                    <span className="fa-stack fa-3x">
                      <i className="fas fa-square fa-stack-2x"></i>
                      <i className="fab fa-codepen fa-stack-1x fa-inverse"></i>
                    </span>
                    <h1 className="text-nuno font-weight-bold py-1">
                      <span className="counter">199</span>
                    </h1>
                    <h4 className="text-uppercase font-weight-bold">
                      Web Dev Files
                    </h4>
                  </div>

                  <div className="col-md-6 col-lg-3">
                    <span className="fa-stack fa-3x">
                      <i className="fas fa-square fa-stack-2x"></i>
                      <i className="fas fa-users fa-stack-1x fa-inverse"></i>
                    </span>
                    <h1 className="text-nuno font-weight-bold py-1">
                      <span className="counter">365</span>
                    </h1>
                    <h4 className="text-uppercase font-weight-bold">
                      24/7 Support
                    </h4>
                  </div>

                  <div className="col-md-6 col-lg-3">
                    <span className="fa-stack fa-3x">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fas fa-cloud-download-alt fa-stack-1x fa-inverse"></i>
                    </span>
                    <h1 className="text-nuno font-weight-bold py-1">
                      <span className="counter">101</span>
                    </h1>
                    <h4 className="text-uppercase font-weight-bold">
                      Resources
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-12 text-center os-animation"
              data-animation="animate__animated animate__fadeInUp"
            >
              <p className="lead">
                Want to learn more about our design and development skills?
              </p>
              <a href="#contact" className="btn btn-nuno btn-sm">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Impact;
