
import '../../App.css'

import '../../index.css'


import _ from 'lodash';
const  Pagination= props => {
    const {countItem,pageSize,currentPage,nextPage,prevPage} = props;
    

    let pageCount = Math.ceil(countItem/pageSize);
    let page=_.range(1,pageCount+1);

    if(pageCount===1) return null    


    return (  <div className='pag'>
    <nav>
    
    <ul className="pagination">
      <li className={currentPage===1?"page-item disableCaret d-none":"page-item disableCaret"} onClick={()=>prevPage()}
      
      ><a className="page-link">Previous</a></li>

        {page.map((p)=>{
      return <li key={p} className={p===currentPage ? "page-item active disableCaret" : "page-item disableCaret"}><a className="page-link" onClick={()=>props.onPageChange(p)} >{p}</a></li>})}

      <li className={currentPage===pageCount?"page-item disableCaret d-none":"page-item disableCaret"} onClick={()=>nextPage()} 
        
      
      ><a className="page-link .invisible">Next</a></li>
    </ul>
  </nav> 
  
  </div>);
}
 
export default Pagination;