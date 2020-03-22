import React, { Component } from 'react'
import { Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';

export class CustomerItem extends Component {

    render() {
        const imageLink = `https://res.cloudinary.com/oluwamayowaf/image/upload/v1584127777/`;
        return (
            <React.Fragment>
                <Col  className='Shopping-item'>
           <Link style={{textDecoration:'none'}} to={ `/product/${this.props.id}`}>
          
                    <div className='item-image' style={{ backgroundImage:`url(${imageLink}${this.props.image})`}} >
                    </div>
                   
                <h5>{this.props.name}</h5> 
                <p>{this.props.brand}</p>
                <p className='amount'>${this.props.price}</p> 
               
                </Link>

              
                
              
            </Col>
        </React.Fragment>
        )
    }
}

export default CustomerItem
