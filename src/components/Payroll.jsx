import  React, { useEffect, useState } from 'react';
import {
  DataGrid,
  GridToolbar,
  gridFilteredSortedRowIdsSelector,
  selectedGridRowsSelector,
} from '@mui/x-data-grid';



const columns = [
    { field: 'id', headerName: 'ID', width: 70},
    { field: 'name', headerName: 'Name', width:150},
    { field: 'BasicPay', headerName: 'Basic Pay', type: 'number'},
    { field: 'Allowance', headerName: 'Allowance', type: 'number'},
    { field: 'Incentives', headerName: 'Incentives', type: 'number'},
    { field: 'DaysPresent', headerName: '#days Present', type: 'number', width:100},
    { field: 'DaysAbsent', headerName: '#days Absent', type: 'number', width:100},
    { field: 'GrossIncome', headerName: 'Gross Income', type: 'number', width:150},
    { field: 'SSS', headerName: 'SSS', type: 'number'},
    { field: 'PAGIBIG', headerName: 'PAGIBIG', type: 'number'},
    { field: 'PHIC', headerName: 'PHIC', type: 'number'},
    { field: 'Tax', headerName: 'Tax', type: 'number'},
    { field: 'NetIncome', headerName: 'Net Income', type: 'number', width:150},
  ];
  

  const Payroll = ({ apiRef }) => {
    const selectedRowIds = selectedGridRowsSelector(apiRef);
  if (selectedRowIds.size > 0) {
    return Array.from(selectedRowIds.keys());
  }

  return gridFilteredSortedRowIdsSelector(apiRef);
};




export default function PrintExportSelectedRows() {
    const [data, setData] = useState([])
    useEffect(()=> {
        fetch('https://sheetsu.com/apis/v1.0bu/ce5fdb6272ab/sheets/Sheet2')
        .then((data) => data.json())
        .then((data) => setData(data))
        .catch(err => console.log(err));
    });

    const handleFileUpload=(e)=>{
      const file=(e.target.files[0])
      const reader=new FileReader()
      reader.onload=(event)=>{
      }};
    
  return (
   
    <div class='container'
    style={{ 
      height: '750', 
      width: '110%',
      marginTop: '5vh'
      }}>
        <div class='container pt-5'>
        <center><h1 className='h1_title_menu'>Payroll Management</h1></center>
        <hr></hr>
       
                <input 
                type="File"
                onChange={handleFileUpload}
                />  
          </div>   
<div className="payrollTable"
 style={{
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  height:"70vh"
}}

>
      <DataGrid
      columns={columns}
      rows={data}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20]}
        checkboxSelection
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: { printOptions: { getRowsToExport: Payroll } },
        }}
      />
</div>
        
    </div>
  );
}

