import React from 'react';
const Input = ({name,lable,value,onChange,error,type}) => {
    return (  <div className="form-group">
    <label htmlFor={name}>{lable}</label>
    <input autoFocus value={value}
    type={type}
    onChange={onChange}
    name={name}
    id={name}  className="form-control" />
    {error && <div className='alert alert-danger'>{error}</div>}
    </div> );
}
 
export default Input;