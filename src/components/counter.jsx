import React, { Component } from "react";

class Counter extends Component {


  style = {
    fontWeight: "bold",
    fontSize: 10,
  };

  render() {
    return (
      <div>
        {/* <button style={this.style} onClick={this.reset} className='btn btn-primary btn-sm'> Reset</button> <br></br> */}
        <span style={this.style} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          style={this.style}
          onClick={() => this.props.onIncreament(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >

          {" "}
          Increament
        </button>
     
        <button
          style={this.style}
          onClick={() => this.props.onDecreament(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
          disabled={this.props.counter.value===0 ? "disabled" : ''}
        >
          {" "}
          Decreament
        </button>
        <button  onClick={()=>this.props.onDelete()} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }


  


  getBadgeClasses() {
    let classes = "badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
 
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
