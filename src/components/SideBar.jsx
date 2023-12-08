import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'boxicons';
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";


const Sidebar = () => {
    const navigate = useNavigate();
    const [isSidebarClosed, setSidebarClosed] = useState(true);

    const handleLogout = async () => {
        await signOut(auth);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate("/login");
    }    

    const handleSidebarToggle = () => {
        setSidebarClosed(!isSidebarClosed);
      };
    
      const handleArrowClick = (e) => {
        const arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
      };    
    
    return (
 
        <nav className="nav">
<div className={`sidebar ${isSidebarClosed ? 'close' : ''}`}>
    <div class="logo-details">
        <img class ="img-fluid h-100"
        src={require("./Images/HRI_white.png")}/>
      <span class="logo_name">HRinSync</span>
    </div>
    <ul class="nav-links">
      <li>
        <a href="/dashboard">
          <i class="bx bx-grid-alt"></i>
          <span class="link_name">Dashboard</span>
        </a>
        <ul class="sub-menu blank">
          <li><a class="link_name" href="/dashboard">Dashboard</a></li>
        </ul>
      </li>

      <li>
        <a href="/newemployee">
          <i class='bx bx-user-plus'></i>
          <span class="link_name">Register New Employee</span>
        </a>
        <ul class="sub-menu blank">
        <li><a class="link_name" href="/newemployee">Register New Employee</a></li>
        </ul>
    </li>

    <li>
        <a href="/employeemasterlist">
          <i class="bi bi-person"></i>
          <span class="link_name">Employee Masterlist</span>
        </a>
        <ul class="sub-menu blank">
        <li><a class="link_name" href="/employeemasterlist">Employee Masterlist</a></li>
        </ul>
    </li>
    <li>
      <a href="#timesheet">
        <i class='bx bx-list-ul' ></i>
        <span class="link_name">Timesheet</span>
      </a>
      <ul class="sub-menu">
        <li><a class="link_name" href="#timesheet">Timesheet</a></li>
      </ul>
    </li>
    <li>
      <a href="/calendar">
        <i class="bi bi-calendar-event"></i>
        <span class="link_name">Event Calendar</span>
      </a>
      <ul class="sub-menu">
        <li><a class="link_name" href="/calendar">Event Calendar</a></li>
      </ul>
    </li>
    <li>
      <a href="/payroll">
        <i class="bi bi-cash"></i>
        <span class="link_name">Payroll</span>
      </a>
      <ul class="sub-menu">
        <li><a class="link_name" href="/payroll">Payroll</a></li>
      </ul>
    </li>
    <li>
      <a href="/softskills">
        <i class="bi bi-lightbulb"></i>
        <span class="link_name">Training</span>
      </a>
      <ul class="sub-menu blank">
          <li><a class="link_name" href="/softskills">Training</a></li>
      </ul>
    </li>
    <li>
      <a href="/pricing">
        <i class="bi bi-cash"></i>
        <span class="link_name">Pricing</span>
      </a>
      <ul class="sub-menu">
        <li><a class="link_name" href="/pricing">Pricing</a></li>
      </ul>
    </li>
      <li>
        <a href="/login">
        <i class="bi bi-box-arrow-left"></i>
          <span class="link_name" onClick={handleLogout}>Logout</span>
        </a>
        <ul class="sub-menu blank">
          <li><a class="link_name" href="/login" onClick={handleLogout}>Logout</a></li>
        </ul>
      </li>
      <li>
  </li>
</ul>
  </div>
  <section class="home-section">
    <div class="home-content">
      <i class='bx bx-menu' onClick={handleSidebarToggle}></i>
      <span class="text"></span>
    </div>
  </section>        
  </nav>



    )

}

export default Sidebar;
