import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import TableHeader from './tableheader';
import TableBody from './tablebody';

const Table = (props) => {
    const {columns,onSort,data,sortColumn}=props
    return (  <table className='table'>
    <TableHeader
    columns={columns}
    onSort={onSort}
    sortColumn={sortColumn}
    
    />
      <TableBody
          data={data}
          column={columns}
          />
      
  </table>);
}
 
export default Table;