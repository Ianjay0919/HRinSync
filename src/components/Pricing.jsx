import React from "react";

function Pricing() {
    return(
        <div className="pricingpage">
            <div className="Subscription"
            style={{
                marginTop:'10vh'
            }}>
                <center><h1 className="h1_title-menu">Subscription Plan</h1></center>
                <hr></hr>
            </div>
            <div class="pricingcontainer" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }} >
                <div class="wrapperpricing">        
                    <div class="pricing-table gprice-single">
                        <div class="head">
                            <h4 class="title">Basic</h4> 
                        </div>
                        <div class="content">
                            <div class="price">
                                <h1>$13</h1>
                            </div>
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
                                <a href="#" class="btn bordered radius launch" data-toggle="modal" data-target="#staticBackdrop">Upgrade Plan</a>
                                    <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"> 
                                        <div class="modal-dialog"> 
                                            <div class="modal-content"> 
                                                <div class="modal-body"> 
                                                    <div class="text-right"> 
                                                        <i class="close" data-dismiss="modal">
                                                            <span class="material-symbols-outlined">close</span>
                                                        </i>
                                                    </div> 
                                                    <div class="tabs mt-3"> 
                                                        <ul class="nav nav-tabs" id="myTab" role="tablist"> 
                                                            <li class="nav-item" role="presentation"> 
                                                                <a class="nav-link active" id="visa-tab" data-toggle="tab" href="#visa" role="tab" aria-controls="visa" aria-selected="true"> 
                                                                    <img src="https://i.imgur.com/sB4jftM.png" width="80"/> 
                                                                </a> 
                                                            </li> 
                                                            <li class="nav-item" role="presentation"> 
                                                                <a class="nav-link" id="paypal-tab" data-toggle="tab" href="#paypal" role="tab" aria-controls="paypal" aria-selected="false"> 
                                                                    <img src="https://i.imgur.com/yK7EDD1.png" width="80"/> 
                                                                </a>
                                                            </li> 
                                                        </ul> 
                                                        <div class="tab-content" id="myTabContent"> 
                                                            <div class="tab-pane fade show active" id="visa" role="tabpanel" aria-labelledby="visa-tab"> 
                                                                <div class="mt-4 mx-4"> 
                                                                    <div class="text-center"> 
                                                                        <h5>Credit card</h5> 
                                                                    </div> 
                                                                    <div class="form mt-3"> 
                                                                        <div class="inputbox"> 
                                                                            <input type="text" name="name" class="form-control" required="required"/> 
                                                                            <span>Cardholder Name</span> 
                                                                        </div> 
                                                                        <div class="inputbox"> 
                                                                            <input type="text" name="name" min="1" max="999" class="form-control" required="required"/> 
                                                                            <span>Card Number</span>                                  
                                                                        </div> 
                                                                        <div class="d-flex flex-row"> 
                                                                            <div class="inputbox"> 
                                                                                <input type="text" name="name" min="1" max="999" class="form-control" required="required"/> 
                                                                                <span>Expiration Date</span> 
                                                                            </div> 
                                                                            <div class="inputbox"> 
                                                                                <input type="text" name="name" min="1" max="999" class="form-control" required="required"/> 
                                                                                <span>CVV</span> 
                                                                            </div> 
                                                                        </div> 
                                                                        <div class="px-5 pay"> 
                                                                            <button class="btn btn-success btn-block">Pay Now</button> 
                                                                        </div> 
                                                                    </div> 
                                                                </div> 
                                                            </div> 
                                                            <div class="tab-pane fade" id="paypal" role="tabpanel" aria-labelledby="paypal-tab"> 
                                                                <div class="px-5 mt-5"> 
                                                                    <div class="inputbox"> 
                                                                        <input type="text" name="name" class="form-control" required="required"/> 
                                                                        <span>Paypal Email Address</span>  
                                                                    </div> 
                                                                    <div class="pay px-5"> 
                                                                        <button class="btn btn-primary btn-block">Add paypal</button> 
                                                                    </div> 
                                                                </div> 
                                                            </div> 
                                                        </div> 
                                                    </div> 
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>
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
                                    <a href="#" class="btn bordered radius launch" data-toggle="modal" data-target="#staticBackdrop">Upgrade Plan</a>
                                    <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"> 
                                        <div class="modal-dialog"> 
                                            <div class="modal-content"> 
                                                <div class="modal-body"> 
                                                    <div class="text-right"> 
                                                        <i class="close" data-dismiss="modal">
                                                            <span class="material-symbols-outlined">close</span>
                                                        </i>
                                                    </div> 
                                                    <div class="tabs mt-3"> 
                                                        <ul class="nav nav-tabs" id="myTab" role="tablist"> 
                                                            <li class="nav-item" role="presentation"> 
                                                                <a class="nav-link active" id="visa-tab" data-toggle="tab" href="#visa" role="tab" aria-controls="visa" aria-selected="true"> 
                                                                    <img src="https://i.imgur.com/sB4jftM.png" width="80"/> 
                                                                </a> 
                                                            </li> 
                                                            <li class="nav-item" role="presentation"> 
                                                                <a class="nav-link" id="paypal-tab" data-toggle="tab" href="#paypal" role="tab" aria-controls="paypal" aria-selected="false"> 
                                                                    <img src="https://i.imgur.com/yK7EDD1.png" width="80"/> 
                                                                </a>
                                                            </li> 
                                                        </ul> 
                                                        <div class="tab-content" id="myTabContent"> 
                                                            <div class="tab-pane fade show active" id="visa" role="tabpanel" aria-labelledby="visa-tab"> 
                                                                <div class="mt-4 mx-4"> 
                                                                     <div class="text-center"> 
                                                                        <h5>Credit card</h5> 
                                                                    </div> 
                                                                    <div class="form mt-3"> 
                                                                        <div class="inputbox"> 
                                                                            <input type="text" name="name" class="form-control" required="required"/> 
                                                                            <span>Cardholder Name</span> 
                                                                        </div> 
                                                                        <div class="inputbox"> 
                                                                            <input type="text" name="name" min="1" max="999" class="form-control" required="required"/> 
                                                                            <span>Card Number</span>                                    
                                                                        </div> 
                                                                        <div class="d-flex flex-row"> 
                                                                            <div class="inputbox"> 
                                                                                <input type="text" name="name" min="1" max="999" class="form-control" required="required"/> 
                                                                                <span>Expiration Date</span> 
                                                                            </div> 
                                                                            <div class="inputbox"> 
                                                                                <input type="text" name="name" min="1" max="999" class="form-control" required="required"/>                                                                                     <span>CVV</span> 
                                                                            </div> 
                                                                        </div> 
                                                                        <div class="px-5 pay"> 
                                                                            <button class="btn btn-success btn-block">Pay Now</button> 
                                                                         </div> 
                                                                    </div> 
                                                                </div> 
                                                            </div> 
                                                            <div class="tab-pane fade" id="paypal" role="tabpanel" aria-labelledby="paypal-tab"> 
                                                                <div class="px-5 mt-5"> 
                                                                    <div class="inputbox"> 
                                                                        <input type="text" name="name" class="form-control" required="required"/> 
                                                                        <span>Paypal Email Address</span>  
                                                                    </div> 
                                                                    <div class="pay px-5"> 
                                                                        <button class="btn btn-primary btn-block">Add paypal</button> 
                                                                    </div> 
                                                                </div> 
                                                            </div> 
                                                        </div> 
                                                    </div> 
                                                 </div> 
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default Pricing;