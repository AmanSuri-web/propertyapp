import React  from 'react';
import Pagination from './Pagination.js';

const GetPageList = ({num,totalPages}) => {

  
  var row=[];
  row.push(1)
  row.push(2)
  row.push(totalPages)


return (<>
    {
    row.map((val,ind)=>{
        return(<Pagination num={num} val={val}/>)
    })
    }
    </>
    )
}

export default GetPageList;