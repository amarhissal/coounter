
import Form from './form';
import Joi from "joi";
import * as userServices from '../services/userService'
import loginServices from '../services/loginServices';
class RegisterForm extends Form {
    state = { 
        data:{ username:"" ,password:"",name:""},
        errors:{}
     } 
 
     schema={
      username:Joi.string().required(),
     password:Joi.string().required().min(5),
     name:Joi.string().required()
     }



      doSubmit=async ()=>{
        try{
         
          const response=await userServices.register(this.state.data)
         loginServices.loginwithjwt(response.headers['x-nm-token'])
          window.location='/'
         
        }
        catch(ex){
          if(ex.response && ex.response.status ===400){
            const errors = {...this.state.errors}
            errors.username = ex.response.data
            this.setState({errors})
          }
        }

      }

      

    render() { 
        return (
      <div>
        <h1>Register</h1>
   
        <form onSubmit={this.handleSubmit}>
            
       

              {this.renderInput("username","Username","text")}
              {this.renderInput("password","Password","password")}
              {this.renderInput("name","Name","text")}


          
              {this.renderButton("Register")}
          </form>

      </div>

        );
    }
}
 
export default RegisterForm;