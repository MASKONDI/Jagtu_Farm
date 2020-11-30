import React, { Component } from "react";

class Testimonial extends Component {
  render() {
    return (
      <div id="clients" className="offset">
        <div className="row py-5">
          <div
            className="col-12 os-animation"
            data-animation="animate__animated animate__fadeInUp"
          >
            <h3 className="heading">Our Clients</h3>
            <div className="heading-underline"></div>
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
                    <i className="fas fa-quote-left"></i>
                    I see Nuno support as more of a partner to my company than a
                    resource. I can pick up the phone and talk to anyone at any
                    time and the way that they interact with us as a business
                    makes it really simple.
                    <hr className="clients-hr" />
                    <cite>&#8212; Eric, Small Business Owner</cite>
                  </blockquote>
                </div>
              </div>

              <div className="row clients px-3 px-md-4">
                <div className="col-lg-4 my-auto">
                  <img src="img/clients/client2.jpg" alt="" />
                </div>
                <div className="col-lg-8">
                  <blockquote className="text-justify">
                    <i className="fas fa-quote-left"></i>
                    The great thing about Nuno is it's not just a design, it's a
                    responsive Bootstrap theme with animation. Nuno's layout is
                    seamless the smooth parallax scrolling and a pop-up
                    portfolio section for my images.
                    <hr className="clients-hr" />
                    <cite>&#8212; Rachel, Professional Photographer</cite>
                  </blockquote>
                </div>
              </div>

              <div className="row clients px-3 px-md-4">
                <div className="col-lg-4 my-auto">
                  <img src="img/clients/client3.jpg" alt="" />
                </div>
                <div className="col-lg-8">
                  <blockquote className="text-justify">
                    <i className="fas fa-quote-left"></i>
                    This theme is fantastic! It has all of the great website
                    elements found throughout professional templates. I've
                    learned a lot through developing and designing it while
                    adding my own touches to the design.
                    <hr className="clients-hr" />
                    <cite>&#8212; Ricky, Aspiring Developer</cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Testimonial;
