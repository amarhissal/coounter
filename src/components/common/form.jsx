import React, { Component } from 'react';
import Joi from 'joi';
import Input from './input';
import Select from './select';


class Form extends Component {
    state = {  
        data:{},
        errors:{}
 } 

    validateprop=()=>{
        
        const res = Joi.object(this.schema)
        const result = res.validate(this.state.data,{abortEarly:false});
         if(!result.error) return null;
        const errors ={};
        for (let item of result.error.details)
           errors[item.path[0]] = item.message;
       
        return errors ;
    }

    validateProperty=({name,value})=>{

        const obj = {[name]:value}
        const schema = {[name]:this.schema[name]};
        const j = Joi.object(schema)
       const {error} = j.validate(obj)

       if(!error) return null
        return error.details[0].message
    }

    handleSubmit=e=>{
        e.preventDefault();
      const errors =  this.validateprop();
      this.setState({errors: errors || {}});
      if (errors) return;
      this.doSubmit();
    }

    handleChange=e=>{
        const data = {...this.state.data}
        data[e.currentTarget.name] = e.currentTarget.value;
        this.setState({data})
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(e.currentTarget) 
        if(errorMessage)  errors[e.currentTarget.name]=errorMessage;
        else delete errors[e.currentTarget.name]
        this.setState({errors})

  
  
      } 

      renderButton=(label)=>{
       return( <button type="submit"  disabled={this.validateprop()} className="btn btn-primary mb-2">
        {label}
        </button> 
       );
      }

        renderBackButton = () => {
        return (
        <button
        type="button"
        onClick={() => this.props.navigate(-1)}  // Or this.props.history.goBack()
        className="btn btn-secondary mb-2"
        >
          Back
         </button>
        );
        };

   
      renderInput=(name,label,type="text")=>{
        return( <Input name={name}
        type={type}
        lable={label}
        onChange={this.handleChange}
        value={this.state.data[name]}
        error={this.state.errors[name]}
       />);
      }

      renderSelect=(name,label,options)=>{
        const {data,errors} = this.state;
        return(
            <Select
            name={name}
            lable={label}
            value={data[name]}
            options={options}
            onChange={this.handleChange}
            error={errors[name]}

            />
        )

      }

}
 
export default Form;