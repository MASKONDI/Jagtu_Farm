import React, { Component } from "react";

class LandingContent extends Component {
  render() {
    return (
      <div className="home">
        <div className="landing">
          <div className="home-wrap">
            <div className="home-inner"></div>
          </div>
        </div>

        <div className="caption text-center text-light text-uppercase">
          <h1
            className="font-weight-bold os-animation"
            data-animation="animate__animated animate__fadeInUp"
            data-delay=".6s"
          >
            Welcome to <span className="text-nuno">JAGTU</span>
          </h1>
          <h3
            className="os-animation"
            data-animation="animate__animated animate__fadeInUp"
            data-delay=".8s"
          >
            An Online MarketPlace for Farmers and Consumers
          </h3>
        </div>

        <a href="#features" className="down-arrow text-center">
          <div className="arrow d-none d-md-block">
            <i className="fas fa-angle-down"></i>
          </div>
        </a>
      </div>
    );
  }
}
export default LandingContent;
