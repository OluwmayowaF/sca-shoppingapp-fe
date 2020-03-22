import React, { Component } from 'react';

import {Container, Row, Col, Spinner} from 'react-bootstrap'
import CustomerItem from '../elements/CustomerItem';

export class CustomerItems extends Component {

    
   
 render() {
        return (
            <Container>
           <Row>
           {/* <div className = 'item-grid'> */}
            {this.props.items !== null ?
                    this.props.items.map((item, key)=>(
                        <Col  lg={4} sm={1} md={4} key={item._id}> 
                        <CustomerItem
                    name = {item.name}
                    brand = {item.brand ? item.brand: 'not-set'} 
                    price={item.price}
                    image={item.image}
                    description ={item.description}
                    quantity = {item.quantity}
                    category = {item.category}
                    id={item._id}
                    addToCart = {this.props.addToCart}
                    />
                    </Col>
                    
                     )

                ):
                <div style={{margin:'20% auto'}}>
                <Spinner animation="border"className='text-center' style={{color:'#088AFF',margin:'auto'}} role="status">
                <span className="sr-only">Loading...</span>
                </Spinner>
                </div>
                 }
               

            {/*</div>>*/}
            
            </Row>
            <Row className='p-4'>

            </Row>
            
            </Container>
        )
    }
}

export default CustomerItems
