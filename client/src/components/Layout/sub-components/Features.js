import React, { Component } from "react";
import { Link } from "react-router-dom";
class Features extends Component {
  render() {
    return (
      <div id="features" className="offset">
        <div
          className="row text-center py-4 os-animation justify-content-center"
          data-animation="animate__animated animate__fadeInUp"
        >
          <div className="col-11 col-md-10 col-lg-9">
            <h1>Jaytu An Online Marketplace for sellers and buyers</h1>
            <p className="lead">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
            </p>
            <Link to="/register" className="btn btn-secondary btn-sm">
              Register
            </Link>
            <Link to="/login" className="btn btn-nuno btn-sm">
              Login
            </Link>
          </div>
        </div>

        <div className="jumbotron m-0 py-5">
          <div
            className="col-12 os-animation"
            data-animation="animate__animated animate__fadeInUp"
          >
            <h3 className="heading">Features</h3>
            <div className="heading-underline"></div>
          </div>

          <div className="container">
            <div className="row text-center px-lg-4 px-xl-5">
              <div
                className="col-sm-6 col-md-4 os-animation"
                data-animation="animate__animated animate__fadeInLeft"
              >
                <div className="feature px-2">
                  <span className="fa-stack fa-2x">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fas fa-user-alt fa-stack-1x fa-inverse"></i>
                  </span>
                  <h3>User Friendly</h3>
                  <p className="lead">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </p>
                </div>
              </div>

              <div
                className="col-sm-6 col-md-4 os-animation"
                data-animation="animate__animated animate__fadeInUp"
              >
                <div className="feature px-2">
                  <span className="fa-stack fa-2x">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i
                      className="fas fa-desktop fa-stack-1x fa-inverse"
                      data-fa-transform="shrink-1"
                    ></i>
                  </span>
                  <h3>Online Loading</h3>
                  <p className="lead">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </p>
                </div>
              </div>

              <div
                className="col-sm-6 col-md-4 os-animation"
                data-animation="animate__animated animate__fadeInRight"
              >
                <div className="feature px-2">
                  <span className="fa-stack fa-2x">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i
                      className="fas fa-play fa-stack-1x fa-inverse"
                      data-fa-transform="shrink-3.5 right-1"
                    ></i>
                  </span>
                  <h3>Customer Services</h3>
                  <p className="lead">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </p>
                </div>
              </div>

              <div
                className="col-sm-6 col-md-4 os-animation"
                data-animation="animate__animated animate__fadeInLeft"
              >
                <div className="feature px-2">
                  <span className="fa-stack fa-2x">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fas fa-angle-double-down fa-stack-1x fa-inverse"></i>
                  </span>
                  <h3>XYZZZZZ</h3>
                  <p className="lead">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </p>
                </div>
              </div>

              <div
                className="col-sm-6 col-md-4 os-animation"
                data-animation="animate__animated animate__fadeInUp"
              >
                <div className="feature px-2">
                  <span className="fa-stack fa-2x">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i
                      className="fas fa-sliders-h fa-stack-1x fa-inverse"
                      data-fa-transform="shrink-1"
                    ></i>
                  </span>
                  <h3>Rules and Regulations</h3>
                  <p className="lead">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </p>
                </div>
              </div>

              <div
                className="col-sm-6 col-md-4 os-animation"
                data-animation="animate__animated animate__fadeInRight"
              >
                <div className="feature px-2">
                  <span className="fa-stack fa-2x">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-wpforms fa-stack-1x fa-inverse"></i>
                  </span>
                  <h3>Contact Form</h3>
                  <p className="lead">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed">
          <div className="row dark text-light text-center">
            <div
              className="col-12 os-animation"
              data-animation="animate__animated animate__fadeInUp"
            >
              <h3 className="heading">Customers Roles</h3>
              <div className="heading-underline"></div>
            </div>

            <div
              className="col-md-4 os-animation"
              data-animation="animate__animated animate__fadeInLeft"
            >
              <h3>SELLERS</h3>
              <div className="feature py-2">
                <span className="fa-layers fa-3x">
                  <i className="fab fa-html5"></i>
                </span>
              </div>
              <p className="lead">Built with the latest, HTML 5.</p>
            </div>

            <div
              className="col-md-4 os-animation"
              data-animation="animate__animated animate__fadeInUp"
            >
              <h3>BUYERS</h3>
              <div className="feature py-2">
                <span className="fa-layers fa-3x">
                  <i className="fab fa-bootstrap"></i>
                </span>
              </div>
              <p className="lead">Built with the latest, Bootstrap 4.</p>
            </div>

            <div
              className="col-md-4 os-animation"
              data-animation="animate__animated animate__fadeInRight"
            >
              <h3>CO-ORDINATOR</h3>
              <div className="feature py-2">
                <span className="fa-layers fa-3x">
                  <i className="fab fa-css3-alt"></i>
                </span>
              </div>
              <p className="lead">Built with the latest, CSS 3.</p>
            </div>
          </div>

          <div className="fixed-wrap">
            <div className="fixed-dark"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Features;
