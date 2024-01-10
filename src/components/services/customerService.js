import httpServices from "./httpServices";
const apiUrl="https://new-vidly.onrender.com/api";




export function getCustomers() {
    return httpServices.get(apiUrl+'/customers')
  }
  
  export default{
    getCustomers
  }