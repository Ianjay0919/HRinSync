import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../../firebase';

const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing, getEmployees }) => {
  const id = selectedEmployee.id;

  const [idNum, setIdnumber] = useState(selectedEmployee.idNum);
  const [firstName, setFirstName] = useState(selectedEmployee.firstName);
  const [lastName, setLastName] = useState(selectedEmployee.lastName);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [salary, setSalary] = useState(selectedEmployee.salary);
  const [date, setDate] = useState(selectedEmployee.date);
  const [mobileNo, setMobile] = useState(selectedEmployee.mobileNo);
  const [sssNo, setSSSno] = useState(selectedEmployee.sssNo);


  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!idNum ||!firstName || !lastName || !email || !salary || !date || !mobileNo || !sssNo) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const employee = {
      id,
      idNum,
      firstName,
      lastName,
      email,
      salary,
      date,
      mobileNo,
      sssNo
    };

    await setDoc(doc(db, "employees", id), {
      ...employee
    });

    setEmployees(employees);
    setIsEditing(false);
    getEmployees()

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleUpdate}>
        <h1>Edit Employee</h1>
        <div className='row row1Add'>
            <div className='col-sm-12 col-md-3'>
              <label htmlFor="idNumber">ID no.</label>
              <input
                className='idNumber'
                id="idNumber"
                type="number"
                name="idNumber"
                value={idNum}
                onChange={e => setIdnumber(e.target.value)}
              />
            </div>
            <div className='col-sm-12 col-md-3'>
              <label htmlFor="firstName">First Name</label>
              <input
                className='firstName'
                id="firstName"
                type="text"
                name="firstName"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </div>
            <div className='col-sm-12 col-md-3'>
              <label htmlFor="lastName">Last Name</label>
              <input
                className='lastName'
                id="lastName"
                type="text"
                name="lastName"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </div>
            <div className='col-sm-12 col-md-3'>
              <label htmlFor="email">Email</label>
              <input
                className='email'
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className='row row2Add'>
            <div className='col-sm-12 col-md-3'>
              <label htmlFor="salary">Salary ($)</label>
              <input
                className='salary'
                id="salary"
                type="number"
                name="salary"
                value={salary}
                onChange={e => setSalary(e.target.value)}
              />
            </div>
            <div className='col-sm-12 col-md-3'>
              <label htmlFor="birthDate">Birthdate</label>
              <input
                className='birthDate'
                id="birthDate"
                type="date"
                name="birthDate"
                value={date}
                onChange={e => setDate(e.target.value)}
              />
            </div>
            <div className='col-sm-12 col-md-3'>
              <label htmlFor="mobileNo">Mobile no.</label>
              <input
                className='birthDate'
                id="mobileNo"
                type="number"
                name="date"
                value={mobileNo}
                onChange={e => setMobile(e.target.value)}
              />
            </div>
            <div className='col-sm-12 col-md-3'>
              <label htmlFor="sssNo">SSS no.</label>
              <input
                className='sssNo'
                id="sssNo"
                type="number"
                name="sssNo"
                value={sssNo}
                onChange={e => setSSSno(e.target.value)}
              />
            </div>
          </div>
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button Btn"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;