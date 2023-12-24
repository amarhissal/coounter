import httpServices from "./httpServices";
// import config from './config.json'
import jwtDecode from 'jwt-decode'





 const apiEndpont = "https://new-vidly.onrender.com/api/auth"

export async function  login(email,password){
    const {data:jwt}= await  httpServices.post(apiEndpont,{email,password})
localStorage.setItem('token',jwt);

}

export async function logout(){
    localStorage.removeItem('token')

}

export function loginwithjwt(jwt){
    localStorage.setItem('token',jwt)
}

function getJwt(){
    return localStorage.getItem('token')
}

export  function getCurrentUSer(){
    try {
        const jwt =localStorage.getItem('token')
     return jwtDecode(jwt)
       
        
      } catch (error) {
        return null
      }
}

export default{
    login,
    logout,
    getCurrentUSer,
    loginwithjwt,
    getJwt
}