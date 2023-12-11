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
   
    <div class='payrollContainer'>
      <div class='container'>
        <h1 className='h1_title_menu pt-5'>Payroll Management</h1>
        <input 
          type="File"
          onChange={handleFileUpload}
        />  
      <hr></hr>
      </div>  
      
      <div className="payrollTable"
        style={{
          width: "80%",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          height:"100vh"
        }}>
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

