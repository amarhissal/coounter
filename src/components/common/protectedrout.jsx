import React from 'react';
import { Redirect,Route } from 'react-router-dom';
import loginServices from '../services/loginServices';
const ProtectedRoute = ({path,component:Component,render,...rest}) => {
    return ( 
         <Route
         {...rest}
         render={props=>{
        if(!loginServices.getCurrentUSer()) return <Redirect to='/login'></Redirect>
        else{
            return Component?<Component {...props}/> : render(props);
        }
     
      }} ></Route>
      
      );
}
 
export default ProtectedRoute;