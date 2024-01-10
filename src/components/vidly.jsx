import React, { Component } from 'react';
import {getMovies,deletemovie, likeMovie} from './services/movieService'
import {getGenres} from './services/genreServices'
import ListGroup from './common/listgroup';
import Pagination from './common/pagination';
import { paginate } from '../utils/pagination';
import _ from 'lodash';
import MoviesTable from './common/moviesTable';
import { Link } from 'react-router-dom';
import SearchBox from './common/searchbox';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { ClipLoader } from 'react-spinners';
import '../index.css';



class Vidly extends Component {
    state = {
        movie:[],
        pageSize:5,
        searchQuery:"",
        selectedGenre:null,
        currentPage:1,
        genre:[],
        sortColumn:{path:'title',order:'asc'},
       

      } 

      async componentDidMount (){
        const {data:genre} =await  getGenres();
       
        const movie = await getMovies();



        this.setState({movie,genre})
 
      }

      getPageDate=()=>{
        
        const{
            pageSize,
            currentPage,
            sortColumn,
            selectedGenre,
            searchQuery,
            movie:allMovie
        }=this.state


        let filterd =allMovie
        if(searchQuery)
        filterd=allMovie.filter(m=> 
            m.title.toLowerCase().startsWith(searchQuery.toLowerCase()))

        else if(selectedGenre && selectedGenre._id)
        filterd = allMovie.filter(m=>m.genre._id === selectedGenre._id)

        const sorted = _.orderBy(filterd,[sortColumn.path],[sortColumn.order])
        const movies = paginate(sorted,currentPage,pageSize)

        return{totalCount:filterd.length,data:movies}


      }

    render() {
        const {user} =this.props
        const {totalCount,data}=this.getPageDate();
        const {length } = this.state.movie;
        if(length===0) return  <div className='loderdiv' ><ClipLoader size={250} color={'#123abc'}  />  </div> 


        return (
            <>
         
        <div className='row'>
            <div className='col-2'>
            <ListGroup
                genres={this.state.genre}
                textProperty='name'
                valueProperty='id'
                selectedItem={this.state.selectedGenre}
                onItemSelect={this.handleGenreSelect}
                allSelected={this.handleAllSelect}
            /> </div>
            <div className='col'>
               {user&& <Link
                to='/movies/new'
                className='btn btn-primary'
                style={{marginbottom:25}} >
                New Movie
                </Link>}

              <p>Showing {totalCount} Movies from Database</p>
              <SearchBox value={this.state.searchQuery} onChange={this.handleSearch}/>
              <MoviesTable
                allMovie={data}
                onLike={this.handleLike}
                onDelete={this.handleDelete}
                onSort={this.handleSort}
                sortColumn={this.state.sortColumn}
              />
            <div>
            <Pagination 
            countItem={totalCount} pageSize={this.state.pageSize} 
            onPageChange={this.handlePageChange}
            nextPage={this.handleNextPage} 
            prevPage={this.handlePrevPage} 

            currentPage={this.state.currentPage}/>
            </div>
            </div>
           </div>
           <div className='credit'>
            @Amar Hissal
           </div>
           </>
        );
    }

    handleSearch=query=>{
        this.setState({searchQuery:query,selectedGenre:null,currentPage:1})
    }

    handleSort=(sortColumn)=>{
        
        this.setState({sortColumn})
    }

    handleNextPage=()=>{
      
        let nextPage =this.state.currentPage+1
        this.setState({currentPage:nextPage});


    }
    handlePrevPage=()=>{
    
        let nextPage =this.state.currentPage-1
        this.setState({currentPage:nextPage});


    }

    handleAllSelect=()=>{

        this.setState({selectedGenre:null,currentPage:1})
    }
    
    handleGenreSelect=(item)=>{

        this.setState({selectedGenre:item,searchQuery:"",currentPage:1})
        
    }

    handlePageChange=(page)=>{
  
        this.setState({currentPage:page});
    }

    handleLike= (id)=>{
        let movies1 =[...this.state.movie]
      
        movies1.forEach((m)=>{
            if(m._id===id) return m.isLiked= !m.isLiked;
    
        })

        
         movies1.forEach( (m)=>{
           if (m._id===id)  return likeMovie(m)
          
        })

        if(this.props.user){
            this.setState({movie:movies1})

        }
       
   

    }
   

    handleDelete=(item)=>{
        const movie1 = this.state.movie.filter((i)=>i._id!==item._id)

        if(this.props.user){
            this.setState({movie: movie1})
        }
       deletemovie(item._id)
  
    }
}
 
export default Vidly;