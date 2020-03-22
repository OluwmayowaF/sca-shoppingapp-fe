import React, { Component } from 'react'
import ProductForm from '../elements/productForm'
import { Modal} from 'react-bootstrap'

export class addProduct extends Component {
    
    render() {
        return (
            
            <div className='row'>
            <div className='col-4'>
           

      <Modal show={this.props.showForm} onHide={this.props.hideForm}>
        <Modal.Body>
        <ProductForm 
        hideForm={this.props.hideForm}
        addProduct = {this.props.addProduct}
        onChangeFnc = {this.props.onChangeFnc}
        displayForm = {this.props.displayForm}
        addBtn = {this.props.addBtn}
        name = {this.props.name}
        brand = {this.props.brand}
        description = {this.props.description}
        category = {this.props.category}
        price = {this.props.price}
        quantity = {this.props.quantity}
        previewImage = {this.props.previewImage}
        showSucess = {this.props.showSucess}
        form = {this.props.form}
        /></Modal.Body>

      </Modal>

            </div>                    
            </div>
        )
    }
}

export default addProduct
