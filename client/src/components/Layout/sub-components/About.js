import React, { Component } from "react";
import {Link} from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div className="about_us headerfix">
        <header id="page-header">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto text-center">
                <h1 className="text-white">About Us</h1>
                <p>
                
                </p>
              </div>
            </div>
          </div>
        </header>

        <section id="about" className="py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
               
                <p className=" blackTxt">
            <b className="font-weight-bold">Jagtu Farms</b> recognized as a Private Limited company and has its main office at<b className="font-weight-bold"> 21018 Pinewood,Mahagun MyWoods, Sec 16 C,Greater Noida(W) Gautam Buddha Nagar, U.P.</b>
            We as a company provide a transparent and digital platform to farmers and consumers to buy and sell the various agricultural commodities.Our fair transparency provides the maximum profit to both by eliminating the exorbitant 
            charges of brokers.</p> <br />
            <p className=" blackTxt" >
            <b className="font-weight-bold">Jagtu Farms </b> has rooted its presence particularly in rural India and able to deliver its services to many cities. Company has strategically planed its 
            expansion to other states in upcoming years.We have started working with the purpose to strengthen the online 
            business of crops in a suitable way by offering maximum profits to farmers as well 
            as buyers/consumers for a long-term partnership with a definite aim for a successful business.
          </p>
         
         
          
          <h4 className="text-center"> <b>Features</b></h4>
          <p className=" blackTxt">
            
        Being an Indian Company, Co. has dreamt of to make the life of farmers 
        prosperous and valuable by establish a fair trade in agriculture industry and making 
        an impactful change in the life of farmers, by significantly increasing their income, 
        thereby health, standard of living and social status as well. </p>
        

              </div>
              <div className="col-md-6">
                <img
                  src={require("../../../img/about.jpg")}
                  alt=""
                  className="img-fluid rounded-circle d-none d-md-block about-img"
                  
                  />
              </div>
            </div>
          </div>
        </section>
        <section id="icon-boxes" className="p-5">
          <div className="container">
            <div className="row mb-4">
              <div className="col-md-4">
                <div className="card bg-light text-black text-center">
                  <div className="card-body">
                    <i className="fas fa-balance-scale-left fa-3x"></i>
                    <h3>Quality </h3>
                    <p className="lead">
                  We provide high quality test weight grain along low breakability and no foreign material.
               <br/>
               <br/>
               <br/>
               <br/>
               
                </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-light text-black text-center">
                  <div className="card-body">
                    <i className="fas fa-bullhorn fa-3x"></i>
                    <h3>Trust and Transparency</h3>
                    <p className="lead">
                  We measure our performance in a transparent environment and total transparency will be provided to farmers/producer and buyers/consumers for their trades among them.
                </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-light text-black text-center">
                  <div className="card-body">
                    <i className="fas fa-truck-moving fa-3x"></i>
                    <h3>Transporation</h3>
                <p className="lead">
                  We will assist farmers with transportation.
                  <br/>
               <br/>
               <br/>
               <br/>
               <br/>
                </p>
               
                  </div>
                </div>
              </div>
            </div>
              <br/>
            <div className="row mb-4">
              <div className="col-md-4">
                <div className="card bg-light text-black text-center">
                  <div className="card-body">
                    <i className="fas fa-credit-card fa-3x"></i>
                    <h3>Secure Payment</h3>
                <p className="lead">
                  Our payment processing system is risk-free and easy.
                <br/><br/></p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-light text-black text-center">
                  <div className="card-body">
                    <i className="fas fa-sliders-h fa-3x"></i>
                    <h3>Personal Support</h3>
                <p className="lead">
                  We speak your language and accompany you along the entire purchase process.
                </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-light text-black text-center">
                  <div className="card-body">
                    <i className="fas fa-coffee fa-3x"></i>
                    <h3>Contact US</h3>
                <p className="lead">
                For more details please <Link to="/register">click here</Link>
               
               <br/><br/><br/> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



               {/* <section id="testimonials" className="p-4 bg-dark text-white">
          <div className="container">
            <h2 className="text-center">testimonials</h2>
            <div className="row text-center">
              <div className="col">
                <div className="slider">
                  <div>
                    <blockquote className="blockquote">
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit, quaerat.
                      </p>
                      <footer className="blockquote-footer">
                        John Doe From
                        <cite title="Company 1">Company 1</cite>
                      </footer>
                    </blockquote>
                  </div>
                  <div>
                    <blockquote className="blockquote">
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit, quaerat.
                      </p>
                      <footer className="blockquote-footer">
                        Sam Smith From
                        <cite title="Company 2">Company 2</cite>
                      </footer>
                    </blockquote>
                  </div>
                  <div>
                    <blockquote className="blockquote">
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit, quaerat.
                      </p>
                      <footer className="blockquote-footer">
                        Meghan Williams From
                        <cite title="Company 3">Company 3</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    );
  }
}

export default About;
