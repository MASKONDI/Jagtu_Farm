import React, { Component } from "react";
import { Link } from "react-router-dom";

class Msp extends Component {
  render() {
    return (
      <div className="msp">
        <header id="page-header">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto text-center">
                <h1 className="text-white">MSP based on Commodity</h1>
                <p>
                  It can be variable and negotiable based on Commodity Quality
                </p>
              </div>
            </div>
          </div>
        </header>

        <section id="services" className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card text-center">
                  <div className="card-header bg-dark text-white">
                    <h3 className="text-white">Paddy</h3>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Average 1800/Quintal</h4>
                    <p className="card-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Aut, quis.
                    </p>
                    <ul className="list-group">
                      <li className="list-group-item">
                        <i className="fas fa-check"></i> Variety 1 Name{" "}
                        <span>Price/Quintal</span>
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check"></i> Variety 2 Name
                        <span>Price/Quintal</span>
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check"></i> Variety 3 Name
                        <span>Price/Quintal</span>
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check"></i> Variety 4 Name
                        <span>Price/Quintal</span>
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check"></i> Variety 5 Name
                        <span>Price/Quintal</span>
                      </li>
                    </ul>
                    <Link
                      to="/register"
                      className="btn btn-danger btn-block mt-2"
                    >
                      Get It
                    </Link>
                  </div>
                  <div className="card-footer text-muted">
                    MSP Based on Past Year
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center">
                  <div className="card-header bg-dark text-white">
                    <h3 className="text-white">Paddy</h3>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Average 1800/Quintal</h4>
                    <p className="card-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Aut, quis.
                    </p>
                    <ul className="list-group">
                      <li className="list-group-item">
                        <i className="fas fa-check"></i> Variety 1 Name{" "}
                        <span>Price/Quintal</span>
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check"></i> Variety 2 Name
                        <span>Price/Quintal</span>
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check"></i> Variety 3 Name
                        <span>Price/Quintal</span>
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check"></i> Variety 4 Name
                        <span>Price/Quintal</span>
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check"></i> Variety 5 Name
                        <span>Price/Quintal</span>
                      </li>
                    </ul>
                    <Link
                      to="/register"
                      className="btn btn-danger btn-block mt-2"
                    >
                      Get It
                    </Link>
                  </div>
                  <div className="card-footer text-muted">
                    MSP Based on Past Year
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center">
                  <div className="card-header bg-dark text-white">
                    <h3 className="text-white">Paddy</h3>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Average 1800/Quintal</h4>
                    <p className="card-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Aut, quis.
                    </p>
                    <ul className="list-group">
                      <li className="list-group-item">
                        <i className="fas fa-check"></i> Variety 1 Name{" "}
                        <span>Price/Quintal</span>
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check"></i> Variety 2 Name
                        <span>Price/Quintal</span>
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check"></i> Variety 3 Name
                        <span>Price/Quintal</span>
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check"></i> Variety 4 Name
                        <span>Price/Quintal</span>
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check"></i> Variety 5 Name
                        <span>Price/Quintal</span>
                      </li>
                    </ul>
                    <Link
                      to="/register"
                      className="btn btn-danger btn-block mt-2"
                    >
                      Get It
                    </Link>
                  </div>
                  <div className="card-footer text-muted">
                    MSP Based on Past Year
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="p-5 bg-dark text-white">
          <div className="container">
            <h1 className="text-center text-white">
              Frequently Asked Questions
            </h1>

            <div className="row">
              <div className="col-md-6">
                <div id="accordion">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="mb-0">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-toggle="collapse"
                          data-target="#question1"
                        >
                          How do I register on Jaytu ?
                        </button>
                        <div id="question1" className="collapse">
                          <br />
                          <p style={{ fontSize: "14px" }}>
                            {" "}
                            Registration can be done through following ways viz.
                            -Via JaytuInc portal- https://www.jaytuinc.com
                            -Through near by Co-ordinator or company Branch ?
                          </p>
                        </div>
                      </h5>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header">
                      <h5 className="mb-0">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-toggle="collapse"
                          data-target="#question2"
                        >
                          What are the fees and document required?
                        </button>
                        <div id="question2" className="collapse">
                          <br />
                          <p style={{ fontSize: "14px" }}>
                            {" "}
                            There is no fee registration on Jaytu Details &
                            documents required for registration: -manadatory
                            details like Name,Sex,Address,DOB,Mobile Number,Bank
                            Details. -Documents like Passbook, Any Govt Identity
                            proof etc.
                          </p>
                        </div>
                      </h5>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header">
                      <h5 className="mb-0">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-toggle="collapse"
                          data-target="#question3"
                        >
                          What are the benefits for a Seller ?
                        </button>
                        <div id="question3" className="collapse">
                          <br />
                          <p style={{ fontSize: "14px" }}>
                            {" "}
                            Benefits from Jaytu for a seller/Farmer are:
                            -Transparency in Trade through better price
                            discovery -Access to more market & buyers -Real Time
                            information on price and arrival in near by mandis
                            -Quick payments - will be able to build a healthy
                            financial profile{" "}
                          </p>
                        </div>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div id="accordion">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="mb-0">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-toggle="collapse"
                          data-target="#question4"
                        >
                          How do I get better price ?{" "}
                        </button>
                        <div id="question4" className="collapse">
                          <br />
                          <p style={{ fontSize: "14px" }}>
                            {" "}
                            Jaytu facilitates better price for a seller through
                            transparent process, increased number of buyers from
                            different markets, hence greater negotiation power.
                            via assaying, price commensurate to the quality of
                            produce is obtained by the seller.
                          </p>
                        </div>
                      </h5>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header">
                      <h5 className="mb-0">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-toggle="collapse"
                          data-target="#question5"
                        >
                          How do I receive money for my produce?
                        </button>
                        <div id="question5" className="collapse">
                          <br />
                          <p style={{ fontSize: "14px" }}>
                            {" "}
                            Jaytu facilitates epayments using online modes such
                            as RTGS, NEFT and BHIM UPI wherein payments are made
                            instantly in the respective sellers bank account.
                          </p>
                        </div>
                      </h5>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header">
                      <h5 className="mb-0">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-toggle="collapse"
                          data-target="#question6"
                        >
                          How much time it takes to sell my produce?
                        </button>
                        <div id="question6" className="collapse">
                          <br />
                          <p style={{ fontSize: "14px" }}>
                            {" "}
                            Jaytu records all arrivals digitally and assigns
                            unique LOT id's that could be tracked from the
                            mobile until it is sold. This digitization is aimed
                            at reducing time of transaction in the whole
                            process. However, time of completion of transaction
                            depends on other factors such as the volume of
                            arrivals of that particular mandi and season.{" "}
                          </p>
                        </div>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Msp;
