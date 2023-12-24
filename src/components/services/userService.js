import httpServices from "./httpServices";
// import config from './config.json'
// require('dotenv').config();


const apiEndpoint ="https://new-vidly.onrender.com/api/users"
console.log(apiEndpoint);


export function register(user){

    

    return httpServices.post(apiEndpoint,{
        email:user.username,
        password:user.password,
        name:user.name
    })

}