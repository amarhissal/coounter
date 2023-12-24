// import React, { Component } from 'react';
import Form from './form';
import Joi from 'joi';
import {getMovie,saveMovie} from '../services/movieService'
import { getGenres } from '../services/genreServices';
import { toast } from 'react-toastify';
class MovieForm extends Form {
  state = { 
     data:{
      title:"",
      genreId:"",
      numberInStock:"",
      dailyRentalRate:""
     },
     genres:[],
     errors:[],
    }
    
    schema={
      _id:Joi.string(),
      title:Joi.string().min(3).required(),
      genreId:Joi.string().required(),
      numberInStock:Joi.number().min(0).max(100),
      dailyRentalRate:Joi.number().min(0).max(100)
    };

    async populateGenres(){
      const{data:genres} = await getGenres();
      this.setState({genres})
    }

    async populateMovies(){
      try{
        const movieId = this.props.match.params.id
        if(movieId === 'new') return;
        const {data:movie} = await getMovie(movieId)
        this.setState({data:this.maptoViewModel(movie)})
      }
      catch(ex){
        if(ex) return this.props.history.replace('/not-found')
      }
    }


    async componentDidMount(){
     await this.populateGenres();
     await this.populateMovies();
     
    }

    maptoViewModel(movie){
  
      return{
        _id:movie._id,
        title:movie.title,
        genreId:movie.genre._id,
        numberInStock:movie.numberInStock,
        dailyRentalRate:movie.dailyRentalRate
    
      };
    }

  doSubmit= async ()=>{
    try{
      await saveMovie(this.state.data)
      this.props.history.push("/movies")
    }
    catch(ex){
      toast.error('You have to login First!')
    }
   
    }


  render() { 
    return (<>
    <h1>Movie Form</h1>
    
    <form onSubmit={this.handleSubmit}>
            
       

            {this.renderInput("title","Title","text")}
            {this.renderSelect("genreId","Genre",this.state.genres)}
            
            {this.renderInput("numberInStock","NumberInStock","text")}
            {this.renderInput("dailyRentalRate","Rate","text")}


        
            {this.renderButton("save")}
        </form>
      
    </>);
  }
}
 
export default MovieForm;