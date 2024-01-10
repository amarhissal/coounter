import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route,Redirect,Switch} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Vidly from './components/vidly';
import Rentals from './components/common/rentals';
import loginServices from './components/services/loginServices';
import Customer from './components/common/customer';
import NotFound from './components/common/notfound';
import Navbar from './components/navbarcounter';
import MovieForm from './components/common/movieform'
import LoginForm from './components/common/loginform';
import RegisterForm from './components/common/registerforms';
import Logout from './components/common/logout';
import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import ProtectedRoute from './components/common/protectedrout';


class App extends Component {
  state = {  } 

componentDidMount() {
 const user = loginServices.getCurrentUSer()
 this.setState({user})

}

  render() { 
    const {user} = this.state
    return (
      <>
      <ToastContainer/>
    <Navbar  user={this.state.user}/>
    <main className='container'>
<Switch>
    <Route path='/register' component={RegisterForm}></Route>
    <Route path='/login' component={LoginForm}></Route>
    <Route path='/logout' component={Logout}></Route>
    <ProtectedRoute path='/movies/:id' component={MovieForm}  />
    <Route path='/movies'
    render={props=><Vidly {...props} user={this.state.user}/>} ></Route>
    <ProtectedRoute path='/customers' component={Customer}></ProtectedRoute>
    <Route path='/rentals' component={Rentals}></Route>
    <Route path='/notfound' component={NotFound}></Route>
    <Redirect from='/' exact to='/movies'></Redirect> 
    <Redirect to='/notfound'></Redirect>
    </Switch>
    </main>
    </>
    );
  }
}
 
export default App;