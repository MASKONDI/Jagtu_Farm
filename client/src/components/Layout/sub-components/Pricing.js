import React, { Component } from "react";

class Pricing extends Component {
  render() {
    return (
      <div id="pricing" className="offset">
        <div className="jumbotron mb-0">
          <div className="container py-2">
            <div
              className="os-animation"
              data-animation="animate__animated animate__fadeInUp"
            >
              <h3 className="heading">Pricing</h3>
              <div className="heading-underline"></div>
            </div>

            <div className="row justify-content-center text-center px-lg-4 px-xl-5">
              <div
                className="col-md-6 col-lg-4 os-animation"
                data-animation="animate__animated animate__fadeInLeft"
              >
                <div className="pricing-column">
                  <h3 className="border-bottom py-2 mx-3">BASIC</h3>
                  <p className="lead py-2">
                    The Basic Plan, the best plan to get you started off.
                  </p>
                  <h4 className="pb-2">Domain Names: 1</h4>
                  <h4 className="pb-2">Email Addresses: 1</h4>
                  <h4>Hard Drive: 50GB</h4>
                  <h1 className="py-3">$49</h1>
                  <a href="#contact" className="btn btn-secondary btn-sm">
                    Buy Now
                  </a>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-4 os-animation"
                data-animation="animate__animated animate__fadeInUp"
              >
                <div className="pricing-column">
                  <div className="ribbon">Best Value</div>
                  <h3 className="border-bottom py-2 mx-3 text-nuno font-weight-bold">
                    PRO
                  </h3>
                  <p className="lead py-2">
                    The Pro Plan, the best overall value you can get.
                  </p>
                  <h4 className="pb-2">Domain Names: 5</h4>
                  <h4 className="pb-2">Email Addresses: 3</h4>
                  <h4>Hard Drive: 100GB</h4>
                  <h1 className="py-3">$99</h1>
                  <a href="#contact" className="btn btn-nuno btn-sm">
                    Buy Now
                  </a>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-4 os-animation"
                data-animation="animate__animated animate__fadeInRight"
              >
                <div className="pricing-column">
                  <h3 className="border-bottom py-2 mx-3">PREMIUM</h3>
                  <p className="lead py-2">
                    Go Premium if you need a little extra space.
                  </p>
                  <h4 className="pb-2">Domain Names: 10</h4>
                  <h4 className="pb-2">Email Addresses: 5</h4>
                  <h4>Hard Drive: 150GB</h4>
                  <h1 className="py-3">$149</h1>
                  <a href="#contact" className="btn btn-secondary btn-sm">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Pricing;
