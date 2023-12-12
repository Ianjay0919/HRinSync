import React from "react";
import './Hero.css';
import logo from './Images/HRI_white.png'; 

const About = () => {
    return (
        <div className="aboutUs">
                 <nav class="navbar navbar-expand-lg navbar-red navbar-dark  py-1 my-1">
        <div class="wrapper">
          
        </div>
  <div class="container-fluid all-show ml-2 mr-2">
    <a class="navbar-brand" href="/">
    <div id='logoContainer'>
                <img id='logoHRIS' src={logo} alt="logo" />
            </div></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/aboutus">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#OurPackages">Products</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/login">Sign In</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="container2 col-sm-12 col-md-10">
                <div class="card2">
                    <h1 className="titleAbout">Mission</h1>
                    <p class="subtitle">"To empower organizations with innovative Human Resources Information Systems, fostering efficiency, transparency, and strategic decision-making in workforce management.</p><p>We aim to revolutionize HR processes, enabling companies to focus on their core business while maximizing the potential of their most valuable asset—their people."</p>
                </div>
                <div class="blob">               
                </div>
                </div>
                <div class="container2 col-sm-12 col-md-10">
                <div class="card2">
                    <h1 className="titleAbout">Vision</h1>
                    <p class="subtitle">"To be the leading provider of cutting-edge HRIS solutions globally, recognized for our commitment to driving organizational success through advanced technology.</p><p> We envision a future where businesses seamlessly integrate and optimize their human capital, creating workplaces that thrive on collaboration, engagement, and continuous improvement."</p>
                </div>
                <div class="blob">               
                </div>
                </div>
            <div class="container2 col-sm-12 col-md-10">
                <div class="card2">
                    <h1 className="titleAbout">Goals</h1>
                    <p class="subtitle">
                        <b><u>1. Innovation:</u></b>
                         -- Develop cutting-edge HRIS solutions through continuous R&D, incorporating the latest technology.</p>
                    <p class="subtitle">
                    <b><u>2. Client Satisfaction:</u></b>
                        -- Ensure high customer satisfaction by understanding and addressing unique client needs through excellent support and communication.</p>
                    <p class="subtitle">
                    <b><u>3. Global Expansion:</u></b>
                        -- Expand international presence by customizing solutions for diverse markets and establishing strategic partnerships.</p>
                    <p class="subtitle">
                    <b><u>4. Security and Compliance:</u></b>
                        -- Prioritize data security and compliance, regularly updating protocols to address evolving cyber threats.</p>
                    <p class="subtitle">
                    <b><u>5. Employee Development:</u></b>
                        -- Foster a culture of continuous learning, supporting career growth and skill enhancement for employees.</p>
                    <p class="subtitle">
                    <b><u>6. Sustainability:</u></b>
                        -- Integrate sustainable practices into operations and product development, contributing to environmental and social responsibility.</p>
                </div>
                <div class="blob">               
                </div>
            </div>
           
</div>
    );
}

export default About;
