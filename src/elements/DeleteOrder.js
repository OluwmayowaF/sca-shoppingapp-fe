import React from 'react'
import { Button } from 'react-bootstrap'

export default function DeleteOrder(props) {
    return (
         <React.Fragment>
         <div className='Delete-product-header'>
            <h4 className='text-center '>Delete Product</h4>
            </div>
            {props.showDelSuccess ? <div className="alert-success">Product has been deleted successfully <Button onClick={props.hideDeleteForm} variant='success btn-sm mr-2'>Close</Button> </div> : null}
            {props.showDelFailure ? <div className="alert-danger">An Error occurred please refresh and try again</div> : null}
         <div className='text-center'>
         <h5>Are you sure you want to delete this Product?</h5>
            <p>This action is irreversible</p>
            <Button value={props.product_id} onClick={props.deleteProduct}variant='danger btn-sm mr-2' >Yes</Button>
            <Button onClick={props.hideDeleteForm} variant='outline-primary btn-sm mr-2'>No</Button>
        </div>    
           
            
        </React.Fragment>
    )
}
