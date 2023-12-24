import httpServices from "./httpServices";
// import config from './config.json'

import {toast} from 'react-toastify';

// require('dotenv').config();

const apiUrl="https://new-vidly.onrender.com/api"


export async function  getMovies(){
   
return (await httpServices.get(apiUrl+'/movies')).data

}


export async function  getMovie(movieId){
   
    return (await httpServices.get(apiUrl+'/movies/'+movieId))
    
    }

export async function saveMovie(movie){
    if(movie._id){
        const body = {...movie}
        delete body._id
 

        await httpServices.put(apiUrl+'/movies/'+movie._id,body)
      
    }
    else{
       await  httpServices.post(apiUrl+'/movies',movie)
      

    }

}
export async function  likeMovie(movie){
    const body = {...movie,genreId:movie.genre._id}
    delete body._id
    delete body.genre
    delete body.__v
    
    try{
     await   httpServices.put(apiUrl+'/movies/'+movie._id,body)
    }
    catch(ex){
        toast.error('Login First!')
    }

}

export async function deletemovie(movieId){

       
    try{
 await httpServices.delete(apiUrl+'/movies/'+movieId)
       
       }
       catch(ex){
           toast.error("You are not Admin!")
        
   
       }
   

        
  
}