import httpServices from "./httpServices";
import config from "./config.json"
const apiUrl="https://new-vidly.onrender.com/api";




export function getGenres() {
    return httpServices.get(apiUrl+'/genres')
  }
  