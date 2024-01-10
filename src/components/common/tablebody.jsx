import React, { Component } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import _ from 'lodash'
class TableBody extends Component {
    renderCell=(item,column)=>{
        if(column.content) return column.content(item);
        return _.get(item,column.path)

    }
    createKey=(item,column)=>{
      return item._id+(column.key|| column.path)
    }
 

    render() { 
        const {data,column}=this.props;
        return (<tbody>
            {data.map((item)=>(
                <tr key={item._id}>{column.map((column)=><td key={this.createKey(item,column)}>{this.renderCell(item,column)}</td>)}</tr>
            ))}
        </tbody>);
    }
}
 
export default TableBody;
