import React, { Component } from 'react';
import Counter from './counter'
class Counters extends Component {
   
    render() { 
        return (
           <div>
            <button onClick={this.props.onReset} className='btn btn-primary'>Reset</button>
           { this.props.counters.map(counter=><Counter
                key={counter.id} counter={counter} onDelete={()=>this.props.onDelete(counter.id)} onIncreament={()=>this.props.onIncreament(counter)}
                onDecreament={()=>this.props.onDecreament(counter)}>
         
                </Counter>)}

           </div>
        );
    }
    
    
}
 
export default Counters;