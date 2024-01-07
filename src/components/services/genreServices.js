import httpServices from "./httpServices";
const apiUrl="https://new-vidly.onrender.com/api";




export function getGenres() {
    return httpServices.get(apiUrl+'/genres')
  }
  
  export default{
    getGenres
  }