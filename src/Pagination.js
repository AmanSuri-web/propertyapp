import React from 'react';
import { NavLink } from "react-router-dom";

const Pagination = ({num,val}) => {
  


  
  
  
    const render1 = () => {
      if (num===1) {
         return (<li class="page-item active" ><li class="page-item"><NavLink class="page-link" to="/properties1">1</NavLink></li></li>)
      } else {
        return (<li class="page-item"><NavLink class="page-link" to="/properties1">1</NavLink></li>)
      }
    }
    const render2 = () => {
      if (num===2) {
         return (<li class="page-item active" ><li class="page-item"><NavLink class="page-link" to="/properties2">2</NavLink></li></li>)
      } else {
        return (<li class="page-item"><NavLink class="page-link" to="/properties2">2</NavLink></li>)
      }
    }
    const render3 = () => {
      if (num===3) {
         return (<li class="page-item active" ><li class="page-item"><NavLink class="page-link" to="/properties3">3</NavLink></li></li>)
      } else {
        return (<li class="page-item"><NavLink class="page-link" to="/properties3">3</NavLink></li>)
      }
    }
    
    
    const renderElement=()=>{
   if(val===1)
      return render1()
   else if(val===2)
      return render2()
    else if(val===3)
      return render3()
    
}

  return (
    <>
    
    
    
    {renderElement()}
    
    </>
  );
};

export default Pagination;