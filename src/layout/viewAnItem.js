import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Row, Col} from 'react-bootstrap'

export class viewAnItem extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg={6}>  
                    <p>Image</p></Col>
                    <Col lg={6}>
                    <p>Description</p>  </Col>
                </Row>

            </Container>
                
           
        )
    }
}

export default viewAnItem
