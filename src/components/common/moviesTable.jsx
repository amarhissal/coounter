import React, { Component } from 'react';
import Table from './table';
import {Link} from 'react-router-dom'

import Likes from './like';
class MoviesTable extends Component {
   columnns=[
        {path:'title',lable:'Title', content:movie=><Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
        {path:'genre.name',lable:'Genre'},
        {path:'numberInStock',lable:'Stock'},
        {path:'dailyRentalRate',lable:'Rate'},
        {key:"like",lable:"Like",content:item=><Likes  liked={item.isLiked} onClick={()=>this.props.onLike(item._id)}/>},
        {key:"delete",lable:"Delete",content:item=><button onClick={()=>this.props.onDelete(item)} className='btn btn-danger btn-sm'>Delete</button>}

    ]

    render(){
    const {allMovie,onSort,sortColumn}=this.props

    return (<>
    <Table
    data={allMovie}
    sortColumn={sortColumn}
    onSort={onSort}
    columns={this.columnns}
    />
    </>);
}}
 
export default MoviesTable;