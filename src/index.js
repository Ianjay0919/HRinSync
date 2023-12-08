import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import Protected from './components/Protected';
import Dashboard from './components/Dashboard';
import EmployeeMasterlist from './components/EmployeeMasterlist';
import EmployeePortal from './components/EmployeePortal';
import NewEmployee from './components/NewEmployee';
import Payroll from './components/Payroll';
import SoftSkills from './components/SoftSkills';
import Calendar from './components/Calendar';
import Sidebar from './components/SideBar';
import Pricing from './components/Pricing';


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/login" element={<Login />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/" element={<Protected />} >
              <Route path="/" index element={<Dashboard />} />
            </Route>
            <Route path="/employeeportal" element={<Protected />} >
              <Route path="/employeeportal"  element={<EmployeePortal />} />
            </Route>
            <Route path="/dashboard" element={<Protected />} >
              <Route path="/dashboard"  element={<Dashboard />} />
            </Route>
            <Route path="/employeemasterlist" element={<Protected />} >
              <Route path="/employeemasterlist"  element={<EmployeeMasterlist />} />
            </Route>
            <Route path="/employeeportal" element={<Protected />} >
              <Route path="/employeeportal"  element={<EmployeePortal />} />
            </Route>
            <Route path="/newemployee" element={<Protected />} >
              <Route path="/newemployee"  element={<NewEmployee />} />
            </Route>
            <Route path="/payroll" element={<Protected />} >
              <Route path="/payroll"  element={<Payroll />} />
            </Route>
            <Route path="/softskills" element={<Protected />} >
              <Route path="/softskills"  element={<SoftSkills />} />
            </Route>
            <Route path="/calendar" element={<Protected />} >
              <Route path="/calendar"  element={<Calendar />} />
            </Route>
            <Route path="/pricing" element={<Protected />} >
              <Route path="/pricing"  element={<Pricing />} />
              </Route>
            <Route path="/sidebar" element={<Protected />} >
              <Route path="/sidebar"  element={<Sidebar />} />
            </Route>
      </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

