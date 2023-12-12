import React from 'react';
import './Hero.css';
import logo from './Images/HRI_white.png'; 
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Hero = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='heroContainer'>
            <div className='row'>
                <nav class="navbar navbar-expand-lg navbar-red navbar-dark  py-1 my-1">
                    <div class="wrapper"></div>
                    <div class="container-fluid all-show ml-1 mr-2 vw-100">
                        <a class="navbar-brand" href="/">
                            <div id='logoContainer'>
                                <img id='logoHRIS' src={logo} alt="logo" />
                            </div>
                        </a>
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
                                    <a class="nav-link" href="/login">Sign In</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='row'>
                <div className="vw-100 landingImage">
                    <div className='col-sm-12 col-md-5 btnContainerLanding'>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <Button className='mt-5' variant="primary" onClick={handleShow}>
                            Contact Us
                        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="number"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
                    </div>
                </div>
            </div>
            <div class='container'
    style={{
    alignItems:'center',
    justifyContent:'center',
    paddingTop: '100px',
    paddingBottom:' 100px'
  }}
  >
    <h1 className="h1_title-menu" pt-5>Our Services</h1>
    <hr></hr>
    <div class="col-lg-12 pb-5">
      <img class ="img-fluid rounded mb-4 mb-lg-0"
      src={require("./Images/infographics.png")}/>
    </div>
    <h1 className="h1_title-menu pt-5"> Our Packages</h1>
    <hr></hr>

    <div class="dashboardContainer">

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
            <a href="#" class="btn bordered radius">Choose this Plan</a>
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
  </div>

        </div>
    )
}

export default Hero;
