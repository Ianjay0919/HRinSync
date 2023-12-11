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
import Payroll from './components/Payroll';
import SoftSkills from './components/SoftSkills';
import Calendar from './components/Calendar';
import Sidebar from './components/SideBar';
import Pricing from './components/Pricing';
import AddEmployee from './components/CRUD/AddEmployee';
import Add from './components/CRUD/Add';
import Edit from './components/CRUD/Edit';
import Header from './components/CRUD/Header';
import Table from './components/CRUD/Table';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/login" element={<Login />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/" element={<Protected />} >
              <Route path="/" index element={<Dashboard />} />
            </Route>
            <Route path="/dashboard" element={<Protected />} >
              <Route path="/dashboard"  element={<Dashboard />} />
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
            <Route path="/addemployee" element={<Protected />} >
              <Route path="/addemployee"  element={<AddEmployee />} />
            </Route>
            <Route path="/add" element={<Protected />} >
              <Route path="/add"  element={<Add />} />
            </Route>
            <Route path="/edit" element={<Protected />} >
              <Route path="/edit"  element={<Edit />} />
            </Route>
            <Route path="/edit" element={<Protected />} >
              <Route path="/edit"  element={<Header />} />
            </Route>
            <Route path="/edit" element={<Protected />} >
              <Route path="/edit"  element={<Table />} />
            </Route>
      </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

