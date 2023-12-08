import { useState } from "react";
import axios from "axios";

function NewEmployee() {

// FORM
const [name, SetName]=useState('');
const [birthday, SetBirthday]=useState('');
const [address, SetAddress]=useState('');
const [contactNumber, SetContactNumber]=useState('');
const [emailAddress, SetEmailAddress]=useState('');
const [designation, SetDesignation]=useState('');
const [salary, SetSalary]=useState('');

// SUBMIT
const handleSubmit=(e)=>{
e.preventDefault();
// console.log(name,birthday,address,contactNumber,emailAddress,designation,salary)
    const data={
        Name:name,
        Birthday:birthday,
        Designation:designation,
        Address:address,
        ContactNumber:contactNumber,
        EmailAddress:emailAddress,
        Salary:salary
    }
    axios.post('https://api.apispreadsheets.com/data/onZM10yVxzTaqT1b/',data).then((response)=>{
        console.log(response);
    //  clearing form fields
        SetName('');
        SetBirthday('');
        SetAddress('');
        SetContactNumber('');
        SetEmailAddress('');
        SetDesignation('');
        SetSalary('');
    })
}

return (

<div class="container">
<div class="row d-flex justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center pt-5">
            <hr></hr>
            <h1 className="h1_title-menu">Register New Employee</h1>
            <hr></hr>
        <div class="card mt-2 mx-auto p-5 bg-img">

        {/* form */}

        <form class="form-card" autoComplete="off" className='form-group' onSubmit={handleSubmit}>
            
            <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex"><label class="form-control-label px-3">Name<span class="text-danger"> *</span></label>
                    <input type='text' placeholder="Enter your name" required
                    className='form-control'
                    onChange={(e)=>SetName(e.target.value)} value={name}/>
                    <br></br>
                </div>
                <div class="form-group col-sm-6 flex-column d-flex"><label>Birthday<span class="text-danger"> *</span></label>
                    <input type='date' placeholder="Enter your birthday" required
                    className='form-control'
                    onChange={(e)=>SetBirthday(e.target.value)} value={birthday}/>
                    <br></br>
                </div>
            </div>
            <div class="row justify-content-between text-left">
                <div class="form-group col-12 flex-column d-flex"><label>Address<span class="text-danger"> *</span></label>
                    <input type='text' placeholder="Enter your address" required
                    className='form-control'
                    onChange={(e)=>SetAddress(e.target.value)} value={address}/>
                    <br></br>
                </div>
            </div>
        <div class="row justify-content-between text-left">
            <div class="form-group col-sm-6 flex-column d-flex"><label>Contact Number<span class="text-danger"> *</span></label>
                <input type='number' placeholder="Enter your Contact Number" required
                className='form-control' maxlenght="11"
                onChange={(e)=>SetContactNumber(e.target.value)} value={contactNumber}/>
                <br></br>
            </div>    
            <div class="form-group col-sm-6 flex-column d-flex"><label>Email Address<span class="text-danger"> *</span></label>
                <input type='text' placeholder="Enter your Email Address" required
                className='form-control'
                onChange={(e)=>SetEmailAddress(e.target.value)} value={emailAddress}/>
                <br></br>
            </div>
        </div>
    <div class="row justify-content-between text-left">
        <div class="form-group col-sm-6 flex-column d-flex"><label>Designation<span class="text-danger"> *</span></label>
            <input type='text' placeholder="Enter your designation" required
            className='form-control'
            onChange={(e)=>SetDesignation(e.target.value)} value={designation}/>
            <br></br>
        </div>
            <div class="form-group col-sm-6 flex-column d-flex"><label>Salary<span class="text-danger"> *</span></label>
            <input type='number' placeholder="Enter your Salary" required
            className='form-control'
            onChange={(e)=>SetSalary(e.target.value)} value={salary}/>
            <br></br>
        </div>
    </div>
            <div style={{display:'flex', justifyContent:'flex-end'}}>
            <button type='submit' className="btn btn-primary rounded-pill">Submit</button>
            </div>
    </form>
    </div>
    </div>
</div>
</div>

)
}

export default NewEmployee;