import '../../index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import '../../App.css'

const ListGroup = (props) => {
    const {genres,textProperty,onItemSelect,selectedItem,allSelected}=props;
    return (<ul className="list-group">
        <li className={selectedItem? 'list-group-item disableCaret':'list-group-item active disableCaret'} onClick={()=>allSelected()}>All</li>
   {genres.map((g)=>{  
   return <li key={g._id} onClick={()=>onItemSelect(g)}  className={g===selectedItem ? 'list-group-item active disableCaret':'list-group-item disableCaret' }>{g[textProperty]}</li>

   })}
  </ul>);
  
}
 
export default ListGroup;