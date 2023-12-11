import React from 'react';

const Header = ({ setIsAdding }) => {
  return (
    <header>
      <h3 className='employeesHeader'>Employee Management</h3>
      <div style={{ marginBottom: '18px' }}>
        <button className='Btn' onClick={() => setIsAdding(true)}>Add Employee</button>
      </div>
    </header>
  );
};

export default Header;