import React, { Component } from 'react'
import {IconContext} from 'react-icons'
import { FaWindowClose } from "react-icons/fa";
import {  FiEye } from "react-icons/fi";
import { Button, Modal, Col} from 'react-bootstrap'
import DeleteOrder from './DeleteOrder';
import EditOrder from './EditOrder';
import { Link } from 'react-router-dom';

export class item extends Component {
    constructor(props){
        super(props);
            this.state = {
                hoverActive: false,
                
        }
    }
    toggleHoverState = (state) =>{
        return {
            hoverActive: !state.hoverActive,
        };
    }
  

   projectHover = () => {
       this.setState(this.toggleHoverState)

   }

    render() {
        const imageLink = `https://res.cloudinary.com/oluwamayowaf/image/upload/v1584127777/`;
        return (
            <React.Fragment>
                <Col  className='Shopping-item'>
           <Link  to={ `/product/${this.props.id}`}>
          
                    <div className='item-image' style={{ backgroundImage:`url(${imageLink}${this.props.image})`}} >
                    {
                   !this.state.hoverActive ? <div style={{ width:'100%', padding:'1em'}}> <IconContext.Provider value={{ color: "#19CECE",  className: "global-class-name float-right", size:'24px' }}>
                            <FiEye onClick={this.projectHover} />
                            </IconContext.Provider> </div> :
                   
                        
                        <div style={{backgroundColor:' rgb(242,242,242, 0.8)', width:'100%', padding:'0.8em'}}>
                            
                            <h6>
                           <b className='title-desc'>Description:</b> <span className='description'>{ this.props.description} </span>
                            </h6>
                            <p className='description'>
                            <b className='title-desc'>Category :</b> { this.props.category}
                            </p>
                            <p className='quantity'>
                           <em> {this.props.quantity} available in stock </em> 
                            </p>
                           
                            <Button variant='outline-primary inline btn-sm' onClick={this.props.showEditForm}>Edit</Button>
                            <span className='inline-block m-2'></span>
                            <Button variant='danger inline btn-sm' onClick={this.props.showDeleteForm}>Delete</Button>
                            
                            <IconContext.Provider value={{ color: "grey", className: "global-class-name float-right", size:'24px'}}>
                              <FaWindowClose onClick={this.projectHover}></FaWindowClose>
                            </IconContext.Provider>
                            
                        </div>
                    }
                    </div>
                
                <h5>{this.props.name}</h5> 
                <p>{this.props.brand}</p>
                <p className='amount'>${this.props.price}</p> </Link>
              
                
           
            </Col>
           
            <React.Fragment>
            <Modal show={this.props.showDelete} onHide={this.props.hideDeleteForm}>
        <Modal.Body>
            <div className='row'>
                <div className='col'>
               <DeleteOrder 
               product_id = {this.props.id}
               hideDeleteForm={this.props.hideDeleteForm}
               deleteProduct = {this.props.deleteProduct}
               showDelSuccess = {this.props.showDelSuccess}
               showDelFailure = {this.props.showDelFailure}
               />
                </div>
            </div>
        
        </Modal.Body>

      </Modal>
            </React.Fragment>
            <div>
            <Modal show={this.props.showEdit} onHide={this.props.hideEditForm}>
                <Modal.Body>
                <EditOrder
                    addProduct = {this.props.addProduct}
                    onChangeFnc = {this.props.onChangeFnc}
                    image ={this.props.image}
                    name = {this.props.name}
                    brand = {this.props.brand}
                    description = {this.props.description}
                    category = {this.props.category}
                    price = {this.props.price}
                    quantity = {this.props.quantity}
                    previewImage = {this.props.previewImage}
                    id= {this.props.id}
                    hideEditForm = {this.props.hideEditForm}
                    />
                </Modal.Body>
            </Modal>

            </div>
            
        </React.Fragment>
        )
    }
}

export default item
