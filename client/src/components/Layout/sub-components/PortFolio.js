import React, { Component } from "react";

class PortFolio extends Component {
  render() {
    return (
      <div id="portfolio" className="offset">
        <div className="container-fluid px-0">
          <div className="row justify-content-center py-5">
            <div
              className="col-12 mt-5 os-animation"
              data-animation="animate__animated animate__fadeInUp"
            >
              <h3 className="heading">Portfolio</h3>
              <div className="heading-underline"></div>
            </div>

            <div
              className="col-sm-6 col-md-3 p-0 os-animation"
              data-animation="animate__animated animate__bounceInLeft"
              data-delay=".2s"
            >
              <div className="portfolio-item overflow-hidden">
                <a
                  href="img/portfolio/1.jpg"
                  data-lightbox="example-set"
                  data-title="My Portfolio Image Description"
                >
                  <img
                    src={require("../../../img/portfolio/1.jpg")}
                    alt=""
                    className="example-image w-100"
                  />
                </a>
              </div>
            </div>

            <div
              className="col-sm-6 col-md-3 p-0 os-animation"
              data-animation="animate__animated animate__bounceInLeft"
            >
              <div className="portfolio-item overflow-hidden">
                <a
                  href="img/portfolio/2.jpg"
                  data-lightbox="example-set"
                  data-title="My Portfolio Image Description"
                >
                  <img
                    src={require("../../../img/portfolio/2.jpg")}
                    alt=""
                    className="example-image w-100"
                  />
                </a>
              </div>
            </div>

            <div
              className="col-sm-6 col-md-3 p-0 os-animation"
              data-animation="animate__animated animate__bounceInRight"
            >
              <div className="portfolio-item overflow-hidden">
                <a
                  href="img/portfolio/3.jpg"
                  data-lightbox="example-set"
                  data-title="My Portfolio Image Description"
                >
                  <img
                    src={require("../../../img/portfolio/3.jpg")}
                    alt=""
                    className="example-image w-100"
                  />
                </a>
              </div>
            </div>

            <div
              className="col-sm-6 col-md-3 p-0 os-animation"
              data-animation="animate__animated animate__bounceInRight"
              data-delay=".2s"
            >
              <div className="portfolio-item overflow-hidden">
                <a
                  href="img/portfolio/4.jpg"
                  data-lightbox="example-set"
                  data-title="My Portfolio Image Description"
                >
                  <img
                    src={require("../../../img/portfolio/4.jpg")}
                    alt=""
                    className="example-image w-100"
                  />
                </a>
              </div>
            </div>

            <div
              className="col-sm-6 col-md-3 p-0 os-animation"
              data-animation="animate__animated animate__bounceInLeft"
              data-delay=".2s"
            >
              <div className="portfolio-item overflow-hidden">
                <a
                  href="img/portfolio/5.jpg"
                  data-lightbox="example-set"
                  data-title="My Portfolio Image Description"
                >
                  <img
                    src={require("../../../img/portfolio/5.jpg")}
                    alt=""
                    className="example-image w-100"
                  />
                </a>
              </div>
            </div>

            <div
              className="col-sm-6 col-md-3 p-0 os-animation"
              data-animation="animate__animated animate__bounceInLeft"
            >
              <div className="portfolio-item overflow-hidden">
                <a
                  href="img/portfolio/6.jpg"
                  data-lightbox="example-set"
                  data-title="My Portfolio Image Description"
                >
                  <img
                    src={require("../../../img/portfolio/6.jpg")}
                    alt=""
                    className="example-image w-100"
                  />
                </a>
              </div>
            </div>

            <div
              className="col-sm-6 col-md-3 p-0 os-animation"
              data-animation="animate__animated animate__bounceInRight"
            >
              <div className="portfolio-item overflow-hidden">
                <a
                  href="img/portfolio/7.jpg"
                  data-lightbox="example-set"
                  data-title="My Portfolio Image Description"
                >
                  <img
                    src={require("../../../img/portfolio/7.jpg")}
                    alt=""
                    className="example-image w-100"
                  />
                </a>
              </div>
            </div>

            <div
              className="col-sm-6 col-md-3 p-0 os-animation"
              data-animation="animate__animated animate__bounceInRight"
              data-delay=".2s"
            >
              <div className="portfolio-item overflow-hidden">
                <a
                  href="img/portfolio/8.jpg"
                  data-lightbox="example-set"
                  data-title="My Portfolio Image Description"
                >
                  <img
                    src={require("../../../img/portfolio/8.jpg")}
                    alt=""
                    className="example-image w-100"
                  />
                </a>
              </div>
            </div>

            <div
              className="col-10 col-lg-9 col-xl-8 text-center pt-5 os-animation"
              data-animation="animate__animated animate__fadeInUp"
            >
              <p className="lead">
                Get in contact with us to see more of our great portfolio design
                work in addition to web development projects such as websites,
                apps and more!
              </p>
              <a href="#contact" className="btn btn-secondary btn-sm">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PortFolio;
