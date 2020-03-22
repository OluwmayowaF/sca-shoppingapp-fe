import React, { Component } from 'react'
import { Container, Spinner, Modal } from 'react-bootstrap'
import { Row, Col, Button} from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { FaArrowLeft } from 'react-icons/fa'
import { withRouter } from 'react-router-dom'
import DeleteOrder from '../elements/DeleteOrder'
import EditOrder1 from '../elements/EditOrder1'

export class viewAnItem extends Component {
    render() {
        return (
           <Container>
                
                <Row className='my-5'>
                   
                <IconContext.Provider value={{ color: "#088AFF", size: '2em', className: "global-class-name" }}>
                    <FaArrowLeft  onClick={() => this.props.history.goBack()} />
                </IconContext.Provider>
                </Row>
                { this.props.item ? <Row>
                   
                    <Col lg={6}> 
                    
                    <img width='50%' src={`${this.props.image_link}${this.props.item.image}`}
                    alt='productImage'></img></Col>
                    <Col lg={6}>
                    <h4>{this.props.item.name} </h4> 
                    <h5>{this.props.item.brand} </h5> 
                    <h6>${this.props.item.price} </h6> 
                    <h6>Amount left:{this.props.item.quantity}  </h6>
                    <hr></hr>
                   
                    <h6> <b>Description</b></h6> 
                    <p> {this.props.item.description}</p>
                    <hr></hr>
                    <Button variant='outline-primary mr-3' 
                    onClick ={this.props.showEditForm}> Edit</Button>
                    <Button variant ='danger' onClick ={this.props.showDeleteForm} > Delete</Button>
                     </Col>
                   
                </Row> :  <Row style={{margin:'20% auto'}}>
                <Spinner animation="border"className='text-center' style={{color:'#088AFF',margin:'auto'}} role="status">
                <span className="sr-only">Loading...</span>
                </Spinner>
                </Row> }
                <hr></hr>
                {/*<Row>
                    <h4>Similar Products</h4>
                   

                </Row>*/}
                <React.Fragment>
                    
                <Modal show={this.props.showDelete} onHide={this.props.hideDeleteForm}>
                <Modal.Body>
                 <div className='row'>
                <div className='col'>
                    

               <DeleteOrder 
               product_id = {this.props.item._id}
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
                    
                <EditOrder1
                    addProduct = {this.props.addProduct}
                    onChangeFnc = {this.props.onChangeFnc}
                    image ={this.props.item.image}
                    name = {this.props.item.name}
                    brand = {this.props.item.brand}
                    description = {this.props.item.description}
                    category = {this.props.item.category}
                    price = {this.props.item.price}
                    quantity = {this.props.item.quantity}
                    previewImage = {this.props.item.previewImage}
                    id= {this.props.item._id}
                    hideEditForm = {this.props.hideEditForm}
                    getProduct = {this.props.getProduct}
                    />
                </Modal.Body>
            </Modal>

            </div>

            </Container>
                
           
        )
    }
}

export default withRouter(viewAnItem)
