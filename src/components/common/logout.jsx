import { Component } from 'react';
import loginServices from '../services/loginServices';
class Logout extends Component {
   

    componentDidMount=()=> {
        loginServices.logout()
        window.location='/'
    }
    render() { 
        return (null);
    }
}
 
export default Logout;