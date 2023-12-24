
import * as loginServices from '../services/loginServices'
import Form from './form';
import Joi from 'joi';

class LoginForm extends Form {
    state={
        data:{username:"" , password:"" },
        errors:{}
    }
 
    schema={
        username:Joi.string().required(),
       password:Joi.string().required()
    }

  
 
    doSubmit=async ()=>{
        try {
            const {data} = this.state
           await loginServices.login(data.username,data.password)
          window.location='/'
        } catch (ex) {
            if(ex.response && ex.response.status === 400){
                const errors = {...this.state.errors}
                errors.username = ex.response.data
                this.setState({errors})

            }
        }

    }
   
    
    render() { 

     
        return (
        <div className=' login'>
        <h1>Login </h1>
        
          <form onSubmit={this.handleSubmit}>
              {this.renderInput("username","Username","text")}
              {this.renderInput("password","Password","password")}
              {this.renderButton("Login")}
          </form>
      
        </div>
        
        );
    }
}
 
export default LoginForm;