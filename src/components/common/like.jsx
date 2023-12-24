import React, { Component } from 'react';
import '../../App.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import  { faHeart } from '@fortawesome/free-regular-svg-icons'
// // import { faHeart} from '@fortawesome/free-solid-svg-icons'



class Likes extends Component {
  
    render() { 
      
 
        return (<span className={this.classesreturn()+' disableCaret'}  style={{cursor:'pointer'}} onClick={this.props.onClick} ></span>)}

        classesreturn(){
           let classes;
            if(this.props.liked){
                return classes = "fa-solid fa-heart"
            } 
            else{
              return classes = "fa-regular fa-heart"
            }
          
    
        }
       
    }
 
export default Likes;