import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authAuction";
import { clearCurrentProfile } from "../../../actions/profileAction";

class Home extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/feed">
            Post
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "25px", marginRight: "5px" }}
              title="You must have a Gravatar connected to your email to display an image"
            />{" "}
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Registration
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <div>
        <div className="home">
          {/* Navigation */}
          <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
              <a href="#home" className="navbar-brand">
                <img src="img/nuno.png" alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
              >
                <span className="custom-toggler-icon">
                  <i className="fas fa-bars" />
                </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a href="#home" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#features" className="nav-link">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#portfolio" className="nav-link">
                      Portfolio
                    </a>
                  </li>
                </ul>
                {isAuthenticated ? authLinks : guestLinks}
              </div>
            </div>
          </nav>
          {/* End Navigation */}
          {/* Start Landing Page Image */}
          <div className="landing">
            <div className="home-wrap">
              <div className="home-inner" />
            </div>
          </div>
          {/* End Landing Page Image */}
          {/* Start Landing Page Caption */}
          <div className="caption text-center text-light text-uppercase">
            <h1
              className="font-weight-bold os-animation"
              data-animation="animate__animated animate__fadeInUp"
              data-delay=".6s"
            >
              Welcome to <span className="text-nuno">Nuno</span>
            </h1>
            <h3
              className="os-animation"
              data-animation="animate__animated animate__fadeInUp"
              data-delay=".8s"
            >
              Animated Bootstrap Theme
            </h3>
            <a
              href="#features"
              className="btn btn-outline-light btn-lg rounded-0 os-animation"
              data-animation="animate__animated animate__fadeInUp"
              data-delay="1s"
            >
              Get Started
            </a>
          </div>
          {/* End Landing Page Caption */}
          {/* Start Bouncing Down Arrow */}
          <a href="#features" className="down-arrow text-center">
            <div className="arrow d-none d-md-block">
              <i className="fas fa-angle-down" />
            </div>
          </a>
          {/* End Bouncing Down Arrow */}
        </div>
        {/* End Home Section */}
        {/* Start Features Section */}
        <div id="features" className="offset">
          {/* Start Theme Heading */}
          <div
            className="row text-center py-4 os-animation justify-content-center"
            data-animation="animate__animated animate__fadeInUp"
          >
            <div className="col-11 col-md-10 col-lg-9">
              <h1>Nuno Responsive Bootstrap Theme</h1>
              <p className="lead">
                Bootstrap is an open-source front-end library with HTML and CSS
                based designs. This website is built with HTML5, CSS3 and
                Bootstrap 4.
              </p>
              <a href="#contact" className="btn btn-secondary btn-sm">
                Request A Quote
              </a>
              <a href="#portfolio" className="btn btn-nuno btn-sm">
                See Our Portfolio
              </a>
            </div>
          </div>
          {/* End Theme Heading */}
          {/* Start Jumbotron */}
          <div className="jumbotron m-0 py-5">
            <div
              className="col-12 os-animation"
              data-animation="animate__animated animate__fadeInUp"
            >
              <h3 className="heading">Features</h3>
              <div className="heading-underline" />
            </div>
            <div className="container">
              <div className="row text-center px-lg-4 px-xl-5">
                <div
                  className="col-sm-6 col-md-4 os-animation"
                  data-animation="animate__animated animate__fadeInLeft"
                >
                  <div className="feature px-2">
                    <span className="fa-stack fa-2x">
                      <i className="fas fa-circle fa-stack-2x" />
                      <i className="fas fa-mobile-alt fa-stack-1x fa-inverse" />
                    </span>
                    <h3>Mobile Friendly</h3>
                    <p className="lead">
                      Nuno features a mobie friendly, responsive first website
                      layout using Bootstrap.
                    </p>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-md-4 os-animation"
                  data-animation="animate__animated animate__fadeInUp"
                >
                  <div className="feature px-2">
                    <span className="fa-stack fa-2x">
                      <i className="fas fa-circle fa-stack-2x" />
                      <i
                        className="fas fa-desktop fa-stack-1x fa-inverse"
                        data-fa-transform="shrink-1"
                      />
                    </span>
                    <h3>Full Screen Landing</h3>
                    <p className="lead">
                      Using Bootstrap, the Nuno theme features a full screen
                      carousel landing page.
                    </p>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-md-4 os-animation"
                  data-animation="animate__animated animate__fadeInRight"
                >
                  <div className="feature px-2">
                    <span className="fa-stack fa-2x">
                      <i className="fas fa-circle fa-stack-2x" />
                      <i
                        className="fas fa-play fa-stack-1x fa-inverse"
                        data-fa-transform="shrink-3.5 right-1"
                      />
                    </span>
                    <h3>Custom Animation</h3>
                    <p className="lead">
                      Animate.css and Waypoints.js allow for smooth animations
                      scrolling down the site.
                    </p>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-md-4 os-animation"
                  data-animation="animate__animated animate__fadeInLeft"
                >
                  <div className="feature px-2">
                    <span className="fa-stack fa-2x">
                      <i className="fas fa-circle fa-stack-2x" />
                      <i className="fas fa-angle-double-down fa-stack-1x fa-inverse" />
                    </span>
                    <h3>Parallax Scrolling</h3>
                    <p className="lead">
                      Fixed background images allow the theme to have
                      content-filled parallax scrolling sections.
                    </p>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-md-4 os-animation"
                  data-animation="animate__animated animate__fadeInUp"
                >
                  <div className="feature px-2">
                    <span className="fa-stack fa-2x">
                      <i className="fas fa-circle fa-stack-2x" />
                      <i
                        className="fas fa-sliders-h fa-stack-1x fa-inverse"
                        data-fa-transform="shrink-1"
                      />
                    </span>
                    <h3>Content Slider</h3>
                    <p className="lead">
                      Owl.Carousel.js makes navigating content sliders seamless
                      with it's content carousel navigation.
                    </p>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-md-4 os-animation"
                  data-animation="animate__animated animate__fadeInRight"
                >
                  <div className="feature px-2">
                    <span className="fa-stack fa-2x">
                      <i className="fas fa-circle fa-stack-2x" />
                      <i className="fab fa-wpforms fa-stack-1x fa-inverse" />
                    </span>
                    <h3>Contact Form</h3>
                    <p className="lead">
                      The Bootsrap HTML form will send directly to your email
                      address using PHPMailer.php.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Row */}
            </div>
            {/* End Container*/}
          </div>
          {/* End Jumbotron */}
          {/* Start Fixed BG IMG Dark */}
          <div className="fixed">
            <div className="row dark text-light text-center">
              <div
                className="col-12 os-animation"
                data-animation="animate__animated animate__fadeInUp"
              >
                <h3 className="heading">Built With Care</h3>
                <div className="heading-underline" />
              </div>
              <div
                className="col-md-4 os-animation"
                data-animation="animate__animated animate__fadeInLeft"
              >
                <h3>HTML 5</h3>
                <div className="feature py-2">
                  <span className="fa-layers fa-3x">
                    <i className="fab fa-html5" />
                  </span>
                </div>
                <p className="lead">Built with the latest, HTML 5.</p>
              </div>
              <div
                className="col-md-4 os-animation"
                data-animation="animate__animated animate__fadeInUp"
              >
                <h3>BOOTSTRAP</h3>
                <div className="feature py-2">
                  <span className="fa-layers fa-3x">
                    <i className="fab fa-bootstrap" />
                  </span>
                </div>
                <p className="lead">Built with the latest, Bootstrap 4.</p>
              </div>
              <div
                className="col-md-4 os-animation"
                data-animation="animate__animated animate__fadeInRight"
              >
                <h3>CSS 3</h3>
                <div className="feature py-2">
                  <span className="fa-layers fa-3x">
                    <i className="fab fa-css3-alt" />
                  </span>
                </div>
                <p className="lead">Built with the latest, CSS 3.</p>
              </div>
            </div>
            {/* End Row Dark */}
            <div className="fixed-wrap">
              <div className="fixed-dark" />
            </div>
          </div>
          {/* End Fixed BG IMG Dark */}
        </div>
        {/* End of Features Section */}
        {/* Start Portfolio Section */}
        <div id="portfolio" className="offset">
          <div className="container-fluid px-0">
            <div className="row justify-content-center py-5">
              <div
                className="col-12 mt-5 os-animation"
                data-animation="animate__animated animate__fadeInUp"
              >
                <h3 className="heading">Portfolio</h3>
                <div className="heading-underline" />
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
                      src="img/portfolio/1.jpg"
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
                      src="img/portfolio/2.jpg"
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
                      src="img/portfolio/3.jpg"
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
                      src="img/portfolio/4.jpg"
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
                      src="img/portfolio/5.jpg"
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
                      src="img/portfolio/6.jpg"
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
                      src="img/portfolio/7.jpg"
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
                      src="img/portfolio/8.jpg"
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
                  Get in contact with us to see more of our great portfolio
                  design work in addition to web development projects such as
                  websites, apps and more!
                </p>
                <a href="#contact" className="btn btn-secondary btn-sm">
                  Get In Touch
                </a>
              </div>
            </div>
            {/* End Row */}
          </div>
          {/* End Container */}
        </div>
        {/* End of Portfolio Section */}
        {/* Start Pricing Section */}
        <div id="pricing" className="offset">
          <div className="jumbotron mb-0">
            <div className="container py-2">
              <div
                className="os-animation"
                data-animation="animate__animated animate__fadeInUp"
              >
                <h3 className="heading">Pricing</h3>
                <div className="heading-underline" />
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
              {/* End Row */}
            </div>
            {/* End Container */}
          </div>
          {/* End Jumbotron*/}
        </div>
        {/* End of Pricing Section */}
        {/* Start Team Section */}
        <div id="team" className="offset">
          {/* Start Fixed BG IMG Light */}
          <div className="fixed">
            <div className="row light">
              <div
                className="col-12 os-animation"
                data-animation="animate__animated animate__fadeInUp"
              >
                <h3 className="heading">Meet The Team</h3>
                <div className="heading-underline" />
              </div>
              <div className="container">
                <div
                  className="os-animation"
                  data-animation="animate__animated animate__fadeInUp"
                >
                  <div id="team-carousel" className="owl-carousel owl-theme">
                    <div className="card">
                      <img
                        src="img/team/team1.jpg"
                        alt=""
                        className="card-img-top rounded-0"
                      />
                      <div className="card-body">
                        <h4 className="font-weight-bold">John Lee</h4>
                        <h5 className="text-nuno">CEO</h5>
                        <p className="border-top border-bottom py-3 my-3">
                          John is an entrepreneur with almost 20 years of
                          experience.
                        </p>
                        <ul className="social">
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Card */}
                    <div className="card">
                      <img
                        src="img/team/team2.jpg"
                        alt=""
                        className="card-img-top rounded-0"
                      />
                      <div className="card-body">
                        <h4 className="font-weight-bold">Jessica Miller</h4>
                        <h5 className="text-nuno">President</h5>
                        <p className="border-top border-bottom py-3 my-3">
                          Jessica has over 10 years of experience in a
                          technology role.
                        </p>
                        <ul className="social">
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Card */}
                    <div className="card">
                      <img
                        src="img/team/team3.jpg"
                        alt=""
                        className="card-img-top rounded-0"
                      />
                      <div className="card-body">
                        <h4 className="font-weight-bold">Charles Davis</h4>
                        <h5 className="text-nuno">Vice President</h5>
                        <p className="border-top border-bottom py-3 my-3">
                          Charles went to business school and worked his way up
                          the ladder.
                        </p>
                        <ul className="social">
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Card */}
                    <div className="card">
                      <img
                        src="img/team/team4.jpg"
                        alt=""
                        className="card-img-top rounded-0"
                      />
                      <div className="card-body">
                        <h4 className="font-weight-bold">Cindy Wilson</h4>
                        <h5 className="text-nuno">CFO</h5>
                        <p className="border-top border-bottom py-3 my-3">
                          Cindy has an established financial operations
                          background.
                        </p>
                        <ul className="social">
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Card */}
                  </div>
                  {/* End Team Carousel */}
                </div>
                {/* End Animation */}
              </div>
              {/* End Container */}
            </div>
            {/* End Row */}
            <div className="fixed-wrap">
              <div className="fixed-light" />
            </div>
          </div>
          {/* End Fixed BG IMG Light */}
        </div>
        {/* End Team Section */}
        {/* Start Skills Section */}
        <div id="skills" className="offset">
          <div className="jumbotron m-0 py-5">
            <div className="container">
              <div
                className="col-12 os-animation"
                data-animation="animate__animated animate__fadeInUp"
              >
                <h3 className="heading">Our Skills</h3>
                <div className="heading-underline" />
              </div>
              <div
                className="row justify-content-center text-center os-animation"
                data-animation="animate__animated animate__fadeInUp"
              >
                <div className="col-md-9 col-lg-12 col-xl-11">
                  <div className="row">
                    <div className="col-md-6 col-lg-3">
                      <span className="fa-stack fa-3x">
                        <i className="fas fa-circle fa-stack-2x" />
                        <i className="fas fa-clock fa-stack-1x fa-inverse" />
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
                        <i className="fas fa-square fa-stack-2x" />
                        <i className="fab fa-codepen fa-stack-1x fa-inverse" />
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
                        <i className="fas fa-square fa-stack-2x" />
                        <i className="fas fa-users fa-stack-1x fa-inverse" />
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
                        <i className="fas fa-circle fa-stack-2x" />
                        <i className="fas fa-cloud-download-alt fa-stack-1x fa-inverse" />
                      </span>
                      <h1 className="text-nuno font-weight-bold py-1">
                        <span className="counter">101</span>
                      </h1>
                      <h4 className="text-uppercase font-weight-bold">
                        Resources
                      </h4>
                    </div>
                  </div>
                  {/* End Row */}
                </div>
                {/* End Column */}
              </div>
              {/* End Row Justify Content */}
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
            {/* End Container */}
          </div>
          {/* End Jumbotron */}
        </div>
        {/* End of Skills Section */}
        {/* Start Clients Section */}
        <div id="clients" className="offset">
          <div className="row py-5">
            <div
              className="col-12 os-animation"
              data-animation="animate__animated animate__fadeInUp"
            >
              <h3 className="heading">Our Clients</h3>
              <div className="heading-underline" />
            </div>
            <div
              className="col-12 px-xl-5 os-animation"
              data-animation="animate__animated animate__fadeInUp"
            >
              <div id="clients-carousel" className="owl-carousel owl-theme">
                <div className="row clients px-3 px-md-4">
                  <div className="col-lg-4 my-auto">
                    <img src="img/clients/client1.jpg" alt="" />
                  </div>
                  <div className="col-lg-8">
                    <blockquote className="text-justify">
                      <i className="fas fa-quote-left" />
                      I see Nuno support as more of a partner to my company than
                      a resource. I can pick up the phone and talk to anyone at
                      any time and the way that they interact with us as a
                      business makes it really simple.
                      <hr className="clients-hr" />
                      <cite>— Eric, Small Business Owner</cite>
                    </blockquote>
                  </div>
                </div>
                <div className="row clients px-3 px-md-4">
                  <div className="col-lg-4 my-auto">
                    <img src="img/clients/client2.jpg" alt="" />
                  </div>
                  <div className="col-lg-8">
                    <blockquote className="text-justify">
                      <i className="fas fa-quote-left" />
                      The great thing about Nuno is it's not just a design, it's
                      a responsive Bootstrap theme with animation. Nuno's layout
                      is seamless the smooth parallax scrolling and a pop-up
                      portfolio section for my images.
                      <hr className="clients-hr" />
                      <cite>— Rachel, Professional Photographer</cite>
                    </blockquote>
                  </div>
                </div>
                <div className="row clients px-3 px-md-4">
                  <div className="col-lg-4 my-auto">
                    <img src="img/clients/client3.jpg" alt="" />
                  </div>
                  <div className="col-lg-8">
                    <blockquote className="text-justify">
                      <i className="fas fa-quote-left" />
                      This theme is fantastic! It has all of the great website
                      elements found throughout professional templates. I've
                      learned a lot through developing and designing it while
                      adding my own touches to the design.
                      <hr className="clients-hr" />
                      <cite>— Ricky, Aspiring Developer</cite>
                    </blockquote>
                  </div>
                </div>
              </div>
              {/* End Carousel */}
            </div>
            {/* End Column */}
          </div>
          {/* End Row */}
        </div>
        {/* End of Clients Section */}
        {/* Start Contact Section */}
        <div id="contact" className="offset">
          <div className="container-fluid footer px-0">
            <div className="row outer">
              <div className="container">
                <div className="row py-3">
                  <div className="col-md-5 px-0 pr-md-3">
                    <img src="img/nuno.png" alt="" />
                    <p>
                      At our core is a collection of design and development
                      solutions that represent everything your business needs to
                      compete in the modern marketplace.
                    </p>
                    <strong>Our Location</strong>
                    <p>
                      100 Street Name
                      <br />
                      Our City, AA 10000
                    </p>
                    <strong>Contact Info</strong>
                    <p>
                      (888) 888-8888
                      <br />
                      email@nuno.com
                    </p>
                    <ul className="social pt-3">
                      <li>
                        <a href>
                          <i className="fab fa-facebook-square" />
                        </a>
                      </li>
                      <li>
                        <a href>
                          <i className="fab fa-twitter-square" />
                        </a>
                      </li>
                      <li>
                        <a href>
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href>
                          <i className="fab fa-youtube-square" />
                        </a>
                      </li>
                      <li>
                        <a href>
                          <i className="fab fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* End Column */}
                  <div className="col-md-7 px-0 pl-md-3">
                    <h3>Contact Us</h3>
                    <form
                      action="contact/contact.php"
                      method="POST"
                      id="contact-form"
                    >
                      <div className="messages" />
                      <div className="controls">
                        <div className="form-group">
                          <input
                            type="text"
                            id="form_name"
                            className="form-control"
                            name="name"
                            required="required"
                            placeholder="Enter your name."
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            id="form_email"
                            className="form-control"
                            name="email"
                            required="required"
                            placeholder="Enter your email."
                          />
                        </div>
                        <div className="form-group">
                          <textarea
                            name="message"
                            id="form_message"
                            rows={4}
                            className="form-control"
                            required="required"
                            placeholder="Add your message."
                            defaultValue={""}
                          />
                        </div>
                        <input
                          type="submit"
                          className="btn btn-outline-light btn-sm"
                          defaultValue="Send Message"
                        />
                      </div>
                      {/* End Controls */}
                    </form>
                    {/* End Form */}
                  </div>
                  {/* End Row */}
                </div>
                {/* End Row */}
              </div>
              {/* End Container */}
              <hr className="socket" />© Nuno Theme.
            </div>
            {/* End Row Outer */}
          </div>
          {/* End Container Fluid */}
        </div>
        {/* End Contact Section */}
        {/* Top Scroll */}
        <a href="#home" className="top-scroll">
          <i className="fa fa-angle-up" />
        </a>
      </div>
    );
  }
}
Home.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Home
);
