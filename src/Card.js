import React from 'react';
import "./index.css";
import { NavLink } from "react-router-dom";

function Card(props){
  var text = props.title.toLowerCase()
	return (<>
        <div>
		    <div className="col ">
    
            <NavLink to={`/property/${props.id}`}  style={{margin:'0 auto',textDecoration: 'none'}}>
                <div className="card " >
                    <img src={props.imgsrc} className="card-img-top" style={{height:'300px',display: 'block',marginRight:'auto',marginLeft:'auto',}} alt="..."/>
                    <div className="card-body" style={{alignItems:'center'}}>
                        <h5 className="card-title" style={{textTransform:'capitalize',color:'black'}}>{text}</h5>
        
                     </div>
                </div>
            </NavLink>
  
             </div>
        </div>
	</>);
}
export default Card;