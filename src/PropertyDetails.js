import React ,{useState} from 'react';
import "./index.css";
import Sdata from './Sdata.js'
import "./index.css";
import EditIcon from '@material-ui/icons/Edit';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import Modal from 'react-bootstrap/Modal'

function ProductDetails(props){
  
    const num=props.match.params.id;
   
  const [Tenants,setTenants]=useState([Sdata[num-1].tenant]);
  const [EditTenant,setEditTenant]=useState('');
  const [EditTenantidx,setEditTenantidx]=useState();

  const DeleteTenant = (i) =>{
    setTenants((oldTenants)=>{
        return oldTenants.filter((arrElem,index)=>{
            return i!==index;
        })
    })
  }
  
  
  const [AddTenant,setAddTenant]=useState('');
  const InputEvent=(event)=>{
    const value=event.target.value;
    
    setAddTenant(value)
  }
  const InputEventEdit=(event)=>{
    const value=event.target.value;
    
    setEditTenant(value)
  }
  
  const [Edit, setEdit] = useState(false);
    const [Add, setAdd] = useState(false);

    
  console.log(Tenants)
	return (<>
    
    
		<div className="details" >
            <div className="site_container">
    
                <img src={Sdata[num-1].imgsrc}  className="card_img_top" style={{display: 'block',marginRight:'auto',marginLeft:'auto'}} alt="..."/>
    
                <div style={{padding:'10px'}}>
                    <h5 class="card-title">{Sdata[num-1].title}</h5>
        
                    <p className="display-linebreak">{Sdata[num-1].sname}</p>
                    <div style={{display:'flex'}}>
                        <p style={{padding:'20px'}}>Tenants: </p>
                        <div>{
                            Tenants.map((val,ind)=>{
                                return (<div style={{display:'flex'}}>
                                <p style={{marginLeft:'20px',marginTop:'20px'}}>{val}  </p>
                                <Tooltip title="Edit Tenant">
                                <div>
                                    <EditIcon style={{marginTop:'20px'}} onClick={() => {setEdit(true);setEditTenant(val);setEditTenantidx(ind)}}/>  
                                </div> 
                                </Tooltip>
                                <Tooltip title="Delete Tenant">
                                <div><DeleteIcon style={{marginTop:'20px'}} onClick={()=>{
							DeleteTenant(ind);
						}}/> </div> 
                                </Tooltip>
                                
                            </div>)
                            })
                            }
                        </div>
                        <Tooltip title="Add Tenant">
                            <div>
                                <AddCircleIcon style={{marginTop:'20px',marginLeft:'20px'}} onClick={()=>{setAdd(true);setAddTenant('')}}/> 
                            </div>
                        </Tooltip>
                    </div>

                </div>
            </div>
        </div>
        
        <Modal show={Edit} onHide={() => setEdit(false)} >
        <Modal.Header >
          <Modal.Title>Edit Tenant</Modal.Title>
        </Modal.Header>
        <input style={{width:'80%',marginLeft:'auto',marginRight:'auto'}} type="text" autoComplete="off" name="name" value={EditTenant} onChange={InputEventEdit}  placeholder="edit tenant"/>
        <Modal.Footer>
          <button variant="secondary" onClick={() => {setEdit(false)}}>
            Close
          </button>
          <button variant="primary" onClick={() => {const newTenants = Tenants.slice();newTenants[EditTenantidx]=EditTenant;setTenants(newTenants);setEdit(false)}}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={Add} onHide={() => setAdd(false)} >
        <Modal.Header >
          <Modal.Title>Add Tenant</Modal.Title>
        </Modal.Header>
        <input style={{width:'80%',marginLeft:'auto',marginRight:'auto'}} type="text" autoComplete="off" name="Add" value={AddTenant} onChange={InputEvent}  placeholder="Add Tenant"/>
        <Modal.Footer>
          <button variant="secondary" onClick={()=>{setAdd(false)}}>
            Close
          </button>
          <button variant="primary" onClick={() => {setTenants([...Tenants,AddTenant])
		;setAdd(false);}}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    
	</>);
}
export default ProductDetails;