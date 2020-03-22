import React from 'react'
import { Container } from 'react-bootstrap'
import { Row, Col, Button } from 'react-bootstrap'

export default function cartItem(props) {
    return (
        <Container>
            <Row style={{color:'#696969'}}>
                <Col><img src={props.image} width='70%' alt='productImage'></img></Col>
                <Col><h5>{props.name}</h5></Col>
                <Col><h5>{props.price}</h5></Col>
                <Col><h5>{props.quantity}</h5></Col>
                <Col><h5>{props.subtotal}</h5></Col>
                <Col><Button variant='primary  btn-sm' onClick={() => props.IncreaseItemQuantity(props.id)}>+</Button>
                <Button variant='danger  btn-sm' onClick={() => props.deleteCartItem(props.id)}>clear</Button>
                <Button variant='primary  btn-sm' onClick={() => props.reduceItemQuantity(props.id)}>-</Button></Col>
            </Row>
            <hr></hr>
        </Container>
    )
}
