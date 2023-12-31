
const Select = ({name,lable,options,error,...rest}) => {

    return (  <div className="form-group">
    <label htmlFor={name}>{lable}</label>
  <select name={name} id={name} {...rest} className='form-control'>
    <option value="" />
        {options.map(option=>(
            <option key={option.name} value={option._id} >{option.name}</option>
        ))}
 
  </select>
    {error && <div className='alert alert-danger'>{error}</div>}
    </div> );
}
 
export default Select;