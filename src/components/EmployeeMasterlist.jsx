import React, { useEffect, useState } from "react";
import axios from "axios";


const FetchData = () => {
    const [data, setData] = useState([])
useEffect(()=> {
    axios.get('https://sheetsu.com/apis/v1.0bu/ce5fdb6272ab')
    .then(res => setData(res.data))
    .catch(err => console.log(err));
},[])

return(
<div className="employeemasterlistcontainer pt-5"
    style={{
        marginTop:'10vh',
        width:'90%',
        }}
        >
    <div className="h1-container">
        <center><h1 className="h1_title-menu pb-5"
        style={{
            justifyContent:'center'
       }}
       >Employee Masterlist</h1></center>
    </div>
    <hr></hr>
   
    <div className='payroll-container'
    style={{
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        maxWidth:'100%',
        marginLeft: '280px',
        marginRight: '200px'
        
    }}
    >
       
        <table className='table'>
               
            <thead>
                <tr>
                <th>Name</th>
                <th>Designation</th>
                <th>Address</th>
                <th>Contact Number</th>
                <th>Email Address</th>
                <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((user, index) => {
                        return <tr key={index}>
                            <td>{user.Name}</td>
                            <td>{user.Designation}</td>
                            <td>{user.Address}</td>
                            <td>{user.ContactNumber}</td>
                            <td>{user.EmailAddress}</td>
                            <td>{user.Salary}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        
    </div>
</div>
)
}


export default FetchData;