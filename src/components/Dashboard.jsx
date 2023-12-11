import React from "react";
import { 
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
 } from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

const Dashboard = () => {
    document.body.style.background = "#D3D3D3";

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
        { 
            label: 'leaves',
            data: [3, 6, 9, 7, 7, 1],
            backgroundColor: '#007FFF', 
            borderColor: 'black',
            borderWidth: 1,
            height: '60px'
        }
        ]
    }

    const options = {

    }


    return (
    <div className="dashboardContainer">
        <div className="col-12 dashboardTitle">
        <h3>Dashboard</h3>
        </div>
            <div className="cardDashboard4">
                    <div className="col-4">
                        <img className ="punchBtnImg"
                        src={require("./Images/log-in.png")}/>
                    </div>
                    <div className="col-8">
                        <h6 className="punchBtnLabel">Punch In</h6>
                    </div>
            </div>
            <div className="cardDashboard">
                <div className="col-5">
                    <img className="img1"
                        src={require("./Images/user.png")}/>
                </div>
                <div className="col-7">
                    <span className="counter-value counter">3456</span>
                    <h6 className="counterLabel">Attendance</h6>
                </div>
            </div>
            <div className="cardDashboard">
                <div className="col-5">
                    <img className="img2"
                        src={require("./Images/compliant.png")}/>
                </div>
                <div className="col-7">
                    <span className="counter-value counter">15</span>
                    <h6 className="counterLabel">Policies</h6>
                </div>
            </div>
            <div className="cardDashboard">
                <div className="col-5">
                    <img className ="img3"
                        src={require("./Images/contract.png")}/>
                </div>
                <div className="col-7">
                    <span className="counter-value counter">2</span>
                    <h6 className="counterLabel">Contracts</h6>
                </div>
            </div>
            <div className="cardDashboard">
                <div className="col-5">
                    <img className ="img4"
                        src={require("./Images/leave.png")}/>
                </div>
                <div className="col-7">
                    <span className="counter-value counter">23</span>
                    <h6 className="counterLabel">Leaves</h6>
                </div>
            </div>

        <div className="cardDashboard1">
            <div className="row">
                <div className="col-12 bdayLabel">Today's Birthday 🎂</div>
            </div>

            <div class="container-fluid">
                {/* <!-- Row 1 --> */}
                <div class="row rowBday1">
                    <div class="col-sm-2">
                        <div class="profilePicBday">
                            <img class ="img-fluid h-100"
                            src={require("./Images/man.png")}/>            
                        </div>
                    </div>
                    <div class="col-sm-6    ">
                        <div class="nameAndPos">
                            <div className="col nameBday">
                                <span>Carrol Shelby</span>
                            </div>
                            <div className="col positionBday">
                                <span>UI Designer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 btnContainer">
                        <div className="btnContainer">
                            <button className="wishBtnBday">Wish him</button>
                        </div>
                    </div>
                </div>

                {/* <!-- Row 2 --> */}
                <div class="row rowBday1">
                    <div class="col-sm-2">
                        <div class="profilePicBday">
                            <img class ="img-fluid h-100"
                            src={require("./Images/woman.png")}/>            
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="nameAndPos">
                            <div className="col nameBday">
                                <span>Keira Knightly</span>
                            </div>
                            <div className="col positionBday">
                                <span>Trainee Dev</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 btnContainer">
                        <div className="btnContainer">
                            <button className="wishBtnBday">Wish her</button>
                        </div>
                    </div>
                </div>

                {/* <!-- Row 3 --> */}
                <div class="row rowBday1">
                    <div class="col-sm-2">
                        <div class="profilePicBday">
                            <img class ="img-fluid h-100"
                            src={require("./Images/girl.png")}/>            
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="nameAndPos">
                            <div className="col nameBday">
                                <span>Natalie Portman</span>
                            </div>
                            <div className="col positionBday">
                                <span>UX Designer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 btnContainer">
                        <div className="btnContainer">
                            <button className="wishBtnBday">Wish her</button>
                        </div>
                    </div>
                </div>

                {/* <!-- Row 4 --> */}
                <div class="row rowBday1">
                    <div class="col-sm-2">
                        <div class="profilePicBday">
                            <img class ="img-fluid h-100"
                            src={require("./Images/man-1.png")}/>            
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="nameAndPos">
                            <div className="col nameBday">
                                <span>Henry Ford</span>
                            </div>
                            <div className="col positionBday">
                                <span>UI Designer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 btnContainer">
                        <div className="btnContainer">
                            <button className="wishBtnBday">Wish him</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="cardDashboard1">
            <div className="row">
                <div className="col-12 bdayLabel">Employees on leave 🔕</div>
            </div>

            <div class="container-fluid">
                {/* <!-- Row 1 --> */}
                <div class="row rowBday1">
                    <div class="col-sm-2">
                        <div class="profilePicBday">
                            <img class ="img-fluid h-100"
                            src={require("./Images/profile-1.png")}/>            
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="nameAndPos">
                            <div className="col nameBday">
                                <span>Kate Winslet</span>
                            </div>
                            <div className="col positionBday">
                                <span>UI Designer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 btnContainer">
                        <div className="btnContainer">
                            <button className="leaveBtnBday">Only today</button>
                        </div>
                    </div>
                </div>

                {/* <!-- Row 2 --> */}
                <div class="row rowBday1">
                    <div class="col-sm-2">
                        <div class="profilePicBday">
                            <img class ="img-fluid h-100"
                            src={require("./Images/woman_4140047.png")}/>            
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="nameAndPos">
                            <div className="col nameBday">
                                <span>Scarlett Johansson</span>
                            </div>
                            <div className="col positionBday">
                                <span>UI Designer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 btnContainer">
                        <div className="btnContainer">
                            <button className="leaveBtnBday">Half day</button>
                        </div>
                    </div>
                </div>

                {/* <!-- Row 3 --> */}
                <div class="row rowBday1">
                    <div class="col-sm-2">
                        <div class="profilePicBday">
                            <img class ="img-fluid h-100"
                            src={require("./Images/girl.png")}/>            
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="nameAndPos">
                            <div className="col nameBday">
                                <span>Robert Downey Jr.</span>
                            </div>
                            <div className="col positionBday">
                                <span>UI Designer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 btnContainer">
                        <div className="btnContainer">
                            <button className="leaveBtnBday">Early leave</button>
                        </div>
                    </div>
                </div>

                {/* <!-- Row 4 --> */}
                <div class="row rowBday1">
                    <div class="col-sm-2">
                        <div class="profilePicBday">
                            <img class ="img-fluid h-100"
                            src={require("./Images/man-1.png")}/>            
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="nameAndPos">
                            <div className="col nameBday">
                                <span>Hugh Jackman</span>
                            </div>
                            <div className="col positionBday">
                                <span>UI Designer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 btnContainer">
                        <div className="btnContainer">
                            <button className="leaveBtnBday">Dec22-Dec28</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="cardDashboard3">
            <div className="row">
                <div className="col-12 bdayLabel">Current month holidays 📅</div>
            </div>

            <div class="container-fluid holidayContainerMain">
                {/* <!-- Row 1 --> */}
                <div class="row rowHoliday">
                    <div class="col-sm-3">
                        <div class="holidayContainer">
                            <div className="col holidayDate">
                                <span>8</span>
                            </div>
                            <div className="col holidayMonth">
                                <span>Dec</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-9">
                        <div className="holidayName">
                            <span>Feast of the Immaculate Conception</span>
                        </div>
                    </div>
                </div>

                {/* <!-- Row 2 --> */}
                <div class="row rowHoliday">
                    <div class="col-sm-3">
                        <div class="holidayContainer">
                            <div className="col holidayDate">
                                <span>25</span>
                            </div>
                            <div className="col holidayMonth">
                                <span>Dec</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-9">
                        <div className="holidayName">
                            <span>Christmas day</span>
                        </div>
                    </div>
                </div>

                {/* <!-- Row 3 --> */}
                <div class="row rowHoliday">
                    <div class="col-sm-3">
                        <div class="holidayContainer">
                            <div className="col holidayDate">
                                <span>30</span>
                            </div>
                            <div className="col holidayMonth">
                                <span>Dec</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-9">
                        <div className="holidayName">
                            <span>Rizal Day</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="cardDashboard2">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <h6 className="graphLabel">My leave Analysis 📈</h6>
                </div>
                <div className="col-sm-12 col-md-6">
                    <button className="graphBtn">1 Month</button>
                    <button className="graphBtn">6 Month</button>
                    <button className="graphBtn">1 Year</button>
                </div>
            </div>
            <div className="row graphcontainer" 
            style={
            {
                height: '163px',
            }
            }>
                <Bar
                    data={data}
                    options={options}
                ></Bar>
            </div>
        </div>

        <div className="cardDashboard3">
            <div className="row">
                <div className="col bdayLabel">Announcements 📢</div>
            </div>

            <div class="container-fluid">
                <div className="col">
                    <span className="announcementLabel2">Christmas party held on December 20</span>
                </div>
                <div className="col">
                    <span className="announcementLabel3">It's that wonderful time of the year again, and we're excited to spread some holiday cheer! We are delighted to announce our annual Christmas Party, and you're invited to join in the festive celebration.</span>
                </div>
            </div>
        </div>

        <div className="cardDashboard3">
            <div className="row">
                <div className="col bdayLabel">Need Help? ☎️📧</div>
            </div>
            <div className="col avatarHRcontainer">
                <img class ="avatarHR"
                src={require("./Images/avatar_3385937.png")}/>
            </div>
            <div className="col contactHRLabel2">
                <span>Hailee Steinfeld</span>
            </div>
            <div className="col contactHRLabel3">
                <span>HR Buddy</span>
            </div>
            <div className="row">
                <div className="col contactHRBtnContainer1">
                    <button className="contactHRBtn1">Message</button>
                </div>
                <div className="col contactHRBtnContainer2">
                    <button className="contactHRBtn2">Call</button>
                </div>
            </div>
        </div>







    </div>
  );
}

export default Dashboard;