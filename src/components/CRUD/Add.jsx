import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../firebase';


const Add = ({ employees, setEmployees, setIsAdding, getEmployees }) => {

  const [idNum, setIdnumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [date, setDate] = useState('');
  const [mobileNo, setMobile] = useState('');
  const [sssNo, setSSSno] = useState('');
    
  const handleAdd = async (e) => {
    e.preventDefault();

    if (!idNum ||!firstName || !lastName || !email || !salary || !date || !mobileNo || !sssNo) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const newEmployee = {
      idNum,
      firstName,
      lastName,
      email,
      salary,
      date,
      mobileNo,
      sssNo
    };

    employees.push(newEmployee);

    try {
      await addDoc(collection(db, "employees"), {
        ...newEmployee
      });
    } catch (error) {
      console.log(error)
    }

    setEmployees(employees);
    setIsAdding(false);
    getEmployees()

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${firstName} ${lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className='formContainer'>
        <form onSubmit={handleAdd}>
          <h3>Add Employee</h3>
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
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button Btn"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
        </form>
    </div>
  );
};

export default Add;