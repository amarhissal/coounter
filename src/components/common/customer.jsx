import React, { Component } from 'react';
import _ from 'lodash';

import Table from './table';
import  {getCustomers}from '..//services/customerService'
 
class Customers extends Component {
    state = {

        data : [],


        sortColumn: {path: "name", order: "asc" }
      } 

     columnns = [
        { path: "name", lable: "Name" },
        { path: "phone", lable: "Phone" },
      

      ];

      handleSort=(sortColumn)=>{
        
        this.setState({sortColumn})
        const sorted = _.orderBy(this.state.data,[this.state.sortColumn.path],[this.state.sortColumn.order])
        this.setState({data:sorted})
        

    }


      async componentDidMount() {
        try {
          const customer = await getCustomers();
          const cust = [...customer.data];
      
          this.setState({ data: cust }, () => {
            // Callback function to log the state after it's updated
           
          });
      
          // Avoid logging the state immediately after setState (may not be updated yet)
          // console.log("State before update:", this.state.data);
        } catch (error) {
          console.error("Error fetching customer data:", error);
        }
      }

          
    render() { 

        
        return (<>
        
        
        <h1>Customer</h1>
        <Table
    data={this.state.data}
    sortColumn={this.state.sortColumn}
    onSort={this.handleSort}

    columns={this.columnns}
    />
    </>



);
    }
}
 
export default Customers;
