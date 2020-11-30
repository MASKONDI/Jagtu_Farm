import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div>
        <section id="showcase">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            {/* <ol className="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol> */}
            <div className="carousel-inner">
              <div className="carousel-item carousel-image-1 active">
                <div className="container">
                  <div className="caption  text-light d-sm-block text-right mb-5 ">
                    <h1 className="  welcomeFont">
                      Welcome to <span className="text-jagtu">Jagtu Farms Private Limited-JFPL</span>
                    </h1>
                    <h3 className="text-white" >
                      An online market place for Farmers and Consumers
        </h3>
                    <Link
                      to="/register"
                      className="btn text-white bg-danger btn-lg rounded-0 os-animation"
                    >
                      Register Now</Link>
                  </div>
                </div>
              </div>

              {/* <div className="carousel-item carousel-image-2">
                <div className="container">
                  <div className="carousel-caption d-none d-sm-block mb-5">
                    <h1 className="display-3"></h1>
                    <p className="lead">
                                          </p>
                    <a href="#" className="btn btn-primary btn-lg">
                     
                    </a>
                  </div>
                </div>
              </div> */}

              {/* <div className="carousel-item carousel-image-3">
                <div className="container">
                  <div className="carousel-caption d-none d-sm-block text-right mb-5">
                    <h1 className="display-3"></h1>
                    <p className="lead">
                     
                    </p>
                    <Link to="/about_us" className="btn btn-success btn-lg">
                      About Us
                    </Link>
                  </div>
                </div>
              </div> */}
            </div>

            {/* <a
              href="#myCarousel"
              data-slide="prev"
              className="carousel-control-prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </a>

            <a
              href="#myCarousel"
              data-slide="next"
              className="carousel-control-next"
            >
              <span className="carousel-control-next-icon"></span>
            </a> */}
          </div>
        </section>
        <section id="home-icons" className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-4 text-center">
                <i className="fas fa-cog fa-3x mb-2"></i>
                <h3>Trust</h3>

                <p >
                  Farmers are the only one who does not count as professional in the world. Where
                  the country like India, which is Agricultural dominant country, still struggling to
                  provide farmers their deserving place. We as a company believe that farmers need a
                  firm support apart from Govt. in order to make the agriculture from unorganized to
        organize industry. </p>

              </div>
              <div className="col-md-4 mb-4 text-center">
                <i className="fas fa-cloud fa-3x mb-2"></i>
                <h3>Transparency</h3>
                <p>
                  While futures markets do provide some level of price transparency, the cash market
                  can be very different. Plus there are literally dozens of crops that don’t have a
                  futures market to benchmark off of. We work to bring price and deal transparency to
                  farmers and buyers alike.
                </p>
              </div>
              <div className="col-md-4 mb-4 text-center">
                <i className="fas fa-cart-plus fa-3x mb-2"></i>
                <h3>Efficiencies</h3>
                <p >
                  Our Aim is to use digital technology to improve the lives of those farmers, who are
                  unable to reach out such kind of help and information. We will provide them
                  options where they can benefit with maximum profits.
         </p>
              </div>
            </div>
          </div>
        </section>
        {/** */}
        {/* <section id="home-heading" className="p-5">
          <div className="dark-overlay">
            <div className="row">
              <div className="col">
                <div className="container pt-5">
                  <h1>Are You Ready To Get Started?</h1>
                  <p className="d-none d-md-block">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Est eaque magni sit dolores. Nisi, dolor nam modi
                    perspiciatis consequatur soluta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* *  VIDEO PLAY
        <section id="video-play">
          <div className="dark-overlay">
            <div className="row">
              <div className="col">
                <div className="container p-5">
                  <a
                    href="#"
                    className="video"
                    data-video="https://www.youtube.com/embed/HnwsG9a5riA"
                    data-toggle="modal"
                    data-target="#videoModal"
                  >
                    <i className="fas fa-play fa-3x"></i>
                  </a>
                  <h1>See What We Do</h1>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/** COMMODITY PHOTO */}
        <section id="gallery" className="py-5">
          <div className="container">
            <h1 className="text-center">Commodities </h1>

            <div className="row mb-4">
              <div className="col-md-4">

                <img
                  src={require("../../../src/img/commodities/wheat1.jpg")}
                  alt=""
                  className="example-image w-100"
                />

              </div>

              <div className="col-md-4">

                <img
                  src={require("../../../src/img/commodities/apple1.jpg")}
                  alt=""
                  className="example-image w-100"
                />

              </div>

              <div className="col-md-4">

                <img
                  src={require("../../../src/img/commodities/potato1.jpg")}
                  alt=""
                  className="example-image w-100"
                />

              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-4">

                <img
                  src={require("../../../src/img/commodities/veg1.jpg")}
                  alt=""
                  className="example-image w-100"
                />

              </div>

              <div className="col-md-4">

                <img
                  src={require("../../../src/img/commodities/fruits4.jpg")}
                  alt=""
                  className="example-image w-100"
                />

              </div>

              <div className="col-md-4">

                <img
                  src={require("../../../src/img/commodities/fruits3.jpg")}
                  alt=""
                  className="example-image w-100"
                />

              </div>
            </div>
          </div>
        </section>
        <section id="staff" className="py-5 text-center bg-dark text-white">
          <div className="container">
            <h1>Our Team</h1>

            <div className="row">
              <div
                style={{ marginLeft: "15px", marginRight: "20px" }}
                className="col-md-2"
              >
                <img
                  src={require("../../img/team/team2.jpg")}
                  alt=""
                  className="img-fluid rounded-circle mb-2"
                />
                <h4>Khushboo Sachan</h4>
                <small>Founder</small>
              </div>
              <div
                style={{ marginLeft: "15px", marginRight: "20px" }}
                className="col-md-2"
              >
                <img
                  src={require("../../img/team/swadesh.jpg")}
                  alt=""
                  className="img-fluid rounded-circle mb-2"
                />
                <h4>Swadesh Singh</h4>
                <small>Co-founder</small>
              </div>
              <div
                style={{ marginLeft: "15px", marginRight: "20px" }}
                className="col-md-2"
              >
                <img
                  src={require("../../img/team/vipin.jpg")}
                  alt=""
                  className="img-fluid rounded-circle mb-2"
                />
                <h4>Vipin</h4>
                <small>Co-founder</small>
              </div>
              <div
                style={{ marginLeft: "15px", marginRight: "10px" }}
                className="col-md-2"
              >
                <img
                  src={require("../../img/team/Ankit.jpg")}
                  alt=""
                  className="img-fluid rounded-circle mb-2"
                />
                <h4>Ankit </h4>
                <small>Co-Founder</small>
              </div>

            </div>
          </div>
        </section>
        {/** <!-- VIDEO MODAL --> */}
        {/* <div className="modal fade" id="videoModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <button className="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
                <iframe
                  src=""
                  frameBorder="0"
                  height="350"
                  width="100%"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
