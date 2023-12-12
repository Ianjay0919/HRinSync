import React from "react";

function Pricing() {
    return(
        <div class="dashboardContainer">
        <div className="col-12">
        <h1 className="h1_title-menu pt-5">Subscription Plan</h1>
        <hr></hr>
            </div>
        <div class="pricing-table gprice-single">
          <div class="head">
            <h4 class="title">Basic</h4> 
          </div>
          <div class="content">
            <div class="price">
              <h1>$13</h1>
            </div>
            <h5 style={{fontWeight:'lighter' , color:'red'}}>/ month</h5>
            <ul>
              <b><li>Full-service payroll</li></b>
              <li> * Auto Payroll</li>
              <li> * Tax File and Pay</li>
              <li> * Expert products support</li>
              <li> * Next-day direct deposit</li>
              <b><li><del>Expert review</del></li></b>
              <b><li><del>Expert setup</del></li></b>
              <b><li><del>Track time and projects on the go</del></li></b>
              <b><li><del>Personal HR advisor</del></li></b>
            </ul>
            <div class="sign-up">
              <a href="#" class="btn bordered radius disabled">Current Plan</a>
            </div>
          </div>
        </div>
  
        <div class="pricing-table gprice-single">
          <div class="head">
            <h4 class="title">Standard</h4>
          </div>
          <div class="content">
            <div class="price">
              <h1>$24</h1>
            </div>
            <h5 style={{fontWeight:'lighter' , color:'red'}}>/ month</h5>
            <ul>
              <b><li>Full-service payroll</li></b>
              <li> * Auto Payroll</li>
              <li> * Tax File and Pay</li>
              <li> * Expert products support</li>
              <b><li>Same day direct deposit</li></b>
              <b><li>Expert review</li></b>
              <b><li>Track time on the go</li></b>
              <b><li><del>Expert setup & Track projects on the go</del></li></b>
              <b><li><del>Personal HR advisor</del></li></b>
            </ul>
            <div class="sign-up">
              <a href="#" class="btn bordered radius">Choose this Plan</a>
            </div>
          </div>
        </div>
                  
        <div class="pricing-table gprice-single">
          <div class="head">
            <h4 class="title">Premium</h4>
          </div>
          <div class="content">
            <div class="price">
              <h1>$37</h1>
            </div>
            <h5 style={{fontWeight:'lighter' , color:'red'}}>/ month</h5>
            <ul>
              <b><li>Full-service payroll</li></b>
              <li> * Auto Payroll</li>
              <li> * Tax File and Pay</li>
              <li> * Expert products support</li>
              <b><li>Same day direct deposit</li></b>
              <b><li>Expert review</li></b>
              <b><li>Expert setup</li></b>
              <b><li>Track time and projects on the go</li></b>
              <b><li>Personal HR advisor</li></b>
            </ul>
            <div class="sign-up">
              <a href="#" class="btn bordered radius">Choose this Plan</a>
            </div>
          </div>
        </div>
            
      </div>
        );
    }

export default Pricing;
