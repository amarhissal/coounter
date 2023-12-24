import Axios from 'axios';
import {toast} from 'react-toastify';
import loginServices from './loginServices';

Axios.defaults.headers.common['x-nm-token'] =loginServices.getJwt()

Axios.interceptors.response.use(null,error=>{
    const expectedError = error.response &&
     error.response.status >= 400 &&
      error.response.status <=500;
      if(!expectedError){
        console.log(error);
        toast.error('Unexpected error Found!')
      }
      return Promise.reject(error)
});




export default{
    get : Axios.get,
    post : Axios.post,
     put : Axios.put,
     delete : Axios.delete,
}