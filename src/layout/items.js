import React, { Component } from 'react';
import Item from '../elements/item';
import {Container, Row, Col} from 'react-bootstrap'

export class items extends Component {

    
   
 render() {
        return (
            <Container>
           <Row>
           {/* <div className = 'item-grid'> */}
            {this.props.items !== null ?
                    this.props.items.map((item, key)=>(
                        <Col  lg={4} sm={1} md={4} key={item._id}> 
                        <Item 
                    name = {item.name}
                    brand = {item.brand ? item.brand: 'not-set'} 
                    price={item.price}
                    image={item.image}
                    description ={item.description}
                    quantity = {item.quantity}
                    category = {item.category}
                    id={item._id}
                    hoverActive = {this.props.hoverActive}
                    toggleHoverState = {this.props.toggleHoverState}
                    projectHover = {this.props.projectHover}
                    showDelete = {this.props.showDelete}
                    hideDeleteForm = {this.props.hideDeleteForm}
                    showDeleteForm = {this.props.showDeleteForm}
                    deleteProduct = {this.props.deleteProduct}
                    showDelSuccess = {this.props.showDelSuccess}
                    showDelFailure = {this.props.showDelFailure}
                    showEdit = {this.props.showEdit}
                    hideEditForm = {this.props.hideEditForm}
                    showEditForm = {this.props.showEditForm}
                    onChangeFnc = {this.props.onChangeFnc}
                    />
                    </Col>
                    
                     )

                ):
                    null}
               

            {/*</div>>*/}
            
            </Row>
                
            
            </Container>
        )
    }
}

export default items
