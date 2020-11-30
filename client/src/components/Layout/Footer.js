import React, { Component } from "react";
import {Link} from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="copyrights footerall">
      <div className="container1">
        <div className="row">
          <div className="col-md-3 col-sm-12 footerbrand footerabt">
          <img src={require("../../img/jagtuFinallogo.png")} alt="" />
          <br/>
                <p  className="text-white" style={{"marginTop":"14px"}}>
                  Jagtu Farms Private Limited want to promote uniformity in agriculture marketing by 
                  streamlining of procedures across the integrated markets, removing information
                  asymmetry between buyers and farmers and promoting real time price discovery based 
                  on actual demand and supply. 
                </p>
          </div>
          <div className="col-md-3 col-sm-12 ">
            <h4 className="text-jagtu">Important Links</h4>
            <div className="small-border" />
            <ul className="check">
              <li>
                <Link to="/termsandconditions">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link to="/privacypolicy"  className="text-white">
                  Privacy Policy
                </Link>
              </li>
              {/* <li>
                <Link to="/refundPolicy"  className="text-white">Refund Policy</Link>
              </li> */}
             
            </ul>
          </div>
          
          
          <div className="col-md-3 col-sm-12">
            <h4 className="text-jagtu">Other Links</h4>
            <div className="small-border" />
            <ul className="check text-white">
            <li>
                <Link to="/about_us"  className="text-white">About us</Link>
              </li>
              <li>
                <Link to="/login"  className="text-white">Farmer Register</Link>
              </li>
              <li>
                <Link to="/register"  className="text-white">Buyer Registration</Link>
              </li>
              <li>
                <Link to="/coordinatorRegistration">Co-ordinator Registration</Link>
              </li>
              <li>
                <Link to="/"> Jagtu Blogs</Link>
              </li>
              
             
              <li>
               
                <Link to="/career">Career</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-12">
            <h4 className="text-jagtu">Contact</h4>
            <div className="small-border" />

            <ul className="footercont">
              <li>
                <Link to="/">
                  <i className=" text-white" />
                  <p> 21018,Plot GH-04,Sec-16C,<br /> Pinewood Tower,Mahagun Mywood,<br/> Greater Noida,
                  Uttar Pradesh, India 201308</p>
                </Link>
              </li>

              {/* <li>
                <Link to="">
                  <i className="fa fa-phone text-white" />
                  +91-8126879464
                </Link>
              </li> */}
              <li>
                <Link to="/">
                  <i className="fa fa-paper-plane text-white" />
                 info@jagtu.com
                </Link>
              </li>
            </ul>
            <ul className="socialmediaftr">
              
              <li>
                    <a href="https://www.facebook.com/jagtuJFPL/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
                  </li>
                
              
              <li>
                    <a href="https://twitter.com/JagtuF" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
                  </li>
                  <li>
                    <a href="https://youtube.com/channel/UC5mOWDnKWHNSokZty1KAJQw" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube-square"></i></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/jagtu-farms-private-limited" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                  </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="col-md-12 col-sm-12">
          <div className="copylinks text-white">
            <p>
              Copyrights © 2020{" "}
              <a
                href="https://www.jagtu.com"
                target="_blank"
                rel="noopener noreferrer"
              >
               Jagtu Farms Private Limited-JFPL
              </a>{" "}
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
      // <footer className="bg-dark text-white mt-5 p-4 text-center">
      //   Copyright &copy; {new Date().getFullYear()} | All Rights Reserved |
      //   &nbsp; Jagtu Farms Private Limited 
      //   <br />
      //   <p align="center">info@jagtu.com </p>
      // </footer>
    );
  }
}

export default Footer;
