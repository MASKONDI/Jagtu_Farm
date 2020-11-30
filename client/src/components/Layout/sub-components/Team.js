import React, { Component } from "react";

class Team extends Component {
  render() {
    return (
      <div id="team" className="offset">
        <div className="fixed">
          <div className="row light">
            <div
              className="col-12 os-animation"
              data-animation="animate__animated animate__fadeInUp"
            >
              <h3 className="heading">Meet The Team</h3>
              <div className="heading-underline"></div>
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
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

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
                        Jessica has over 10 years of experience in a technology
                        role.
                      </p>
                      <ul className="social">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

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
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

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
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fixed-wrap">
            <div className="fixed-light"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Team;
