import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Career extends Component {
  render() {
    return (
      <div className="headerfix">
      
      <header id="page-header">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto text-center">
                <h1 className="text-white">Career</h1>
                
              </div>
            </div>
          </div>
        </header>
        <Link to="/" className="btn btn-light">
                  Go Back
                </Link>

                  <div className="row">
                    <div className="col-md-6 "> <div className="card bg-light p-4">
                <div className="card-body "><h2 className="blackTxt">Work culture at Jagtu Farms</h2><i style={{"fontSize":"18px"}}>The Jagtu Farms is one of the leading private sector Farmer-Consumer direct link in India. With the help of a robust, consistent and meritocratic HR framework, Jagtu Farms continues to maintain a progressive people environment, where aim driven talent is attracted and engaged. Jagtu Farms’ friendly work culture aims to motivate all employees to play an integral role in the company’s growth.
There are many career opportunities in the agriculture field, beyond being a farmer. From engineering to veterinary science, plant science to sales, careers in this sphere span a vast range of skills. 
Here are some of the best jobs in agriculture, which offer substantial income potential and a positive employment outlook.
</i></div></div></div>
                    <div className= "col-md-6 blackTxt"> <div className="card bg-light p-4">
                <div className="card-body"><h3 className="text-black"><u>Post Openings</u></h3>
<h6 className="text-black font-weight-bold">CO-ORDINATORS for individual pin code(s) in India</h6><h6 className="text-black font-weight-bold">
Applicant: please mention pin code area for which you are applying for  </h6> <p>
Job Instructions [the following responsibilities should be performed by individual coordinator at his/her respective area/zone/pin code - but not limited to] </p>
<ol> <li>
	Assists farmers/buyers to register themselves in www.jagtu.com 
</li><li>	 Monitors and makes report of everything asked by company like grain details/type/quantity.
</li><li>	 Assists farmers to find buyers with the help of www.jagtu.com for their certain amount of grain(s).
</li><li>	 Assists buyers for their requirement of grains with the help of www.jagtu.com
</li><li>	He/she is responsible for quality/quantity/sampling of the grain(s).
</li><li> He/she is responsible for updating grains details regularly in his/her account/area/pin code provided by the company. 
</li><li>	He/she helps another college/coordinator for sharing details if needed.
</li></ol>
<h6><u>Minimum Qualification required:</u></h6><ol><li>
	Graduate/equivalent in any discipline.</li>
<li>	Basic knowledge of computers/website operation.</li>
<li>	Basic knowledge of English. </li>
<li>	 Good knowledge about locality/pinCode area.</li> </ol>
<h6 ><u>Priorities will be given to the following candidates</u></h6>
<ol>
<li>	Experience in agriculture field</li>
<li>	Young personals and dynamic in nature </li>
<li>	Personal vehicle (tractor, motorcycle etc.) and holding driving licence.</li></ol>
</div></div></div>
                  </div></div>
    )
  }
}
export default Career;