import httpServices from "./httpServices";
const apiUrl="https://new-vidly.onrender.com/api";




export function getRentals() {
    return httpServices.get(apiUrl+'/rentals')
  }
  
  export default{
    getRentals
  }