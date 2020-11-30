import React, { Component } from "react";

class Services extends Component {
  render() {
    return (
      <div className="services">
        <header id="page-header">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto text-center">
                <h1 className="text-white">Our Services</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quas, temporibus?
                </p>
              </div>
            </div>
          </div>
        </header>

        <section id="blog" className="py-3">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="card-columns">
                  <div className="card">
                    <img
                      src="https://source.unsplash.com/agriculture/300x200"
                      alt=""
                      className="img-fluid card-img-top"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Service One</h4>
                      <small className="text-muted">
                        Written by Jeff on 05/20
                      </small>

                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nulla facilis, sequi excepturi, quisquam,
                        dignissimos molestiae dicta dolore dolores quas vel sunt
                        placeat tempora expedita suscipit. Magni vel iusto
                        mollitia exercitationem.
                      </p>
                    </div>
                  </div>

                  <div className="card p-3">
                    <blockquote className="card-blockquote card-body">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Provident amet tenetur vel quam atque est?
                      </p>
                      <footer className="blockquote-footer">
                        <small className="text-muted">
                          Someone Famous in
                          <cite title="Source Title">Source Title</cite>
                        </small>
                      </footer>
                    </blockquote>
                  </div>

                  <div className="card">
                    <img
                      src="https://source.unsplash.com/agriculture/301x200"
                      alt=""
                      className="img-fluid card-img-top"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Service Two</h4>
                      <small className="text-muted">Written by Karen on</small>

                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nulla facilis, sequi excepturi, quisquam,
                        dignissimos molestiae dicta dolore dolores quas vel sunt
                        placeat tempora expedita suscipit. Magni vel iusto
                        mollitia exercitationem.
                      </p>
                    </div>
                  </div>

                  <div className="card p-3 bg-danger text-white">
                    <blockquote className="card-blockquote card-body">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Provident amet tenetur vel quam atque est?
                      </p>
                      <footer className="blockquote-footer">
                        <small className="text-white">
                          Someone Famous in
                          <cite title="Source Title">Source Title</cite>
                        </small>
                      </footer>
                    </blockquote>
                  </div>

                  <div className="card">
                    <img
                      src="https://source.unsplash.com/agriculture/302x200"
                      alt=""
                      className="img-fluid card-img-top"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Service Three</h4>
                      <small className="text-muted">jsdklasdhdkjhldhkd</small>

                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nulla facilis, sequi excepturi, quisquam,
                        dignissimos molestiae dicta dolore dolores quas vel sunt
                        placeat tempora expedita suscipit. Magni vel iusto
                        mollitia exercitationem.
                      </p>
                    </div>
                  </div>

                  <div className="card p-3">
                    <blockquote className="card-blockquote card-body">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Provident amet tenetur vel quam atque est?
                      </p>
                      <footer className="blockquote-footer">
                        <small className="text-muted">
                          Someone Famous in
                          <cite title="Source Title">Source Title</cite>
                        </small>
                      </footer>
                    </blockquote>
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
export default Services;
