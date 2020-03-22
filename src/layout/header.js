import React from 'react';
import {Button, Navbar, Nav }from 'react-bootstrap';


export default function header(props) {
    return (  
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#" >MBS.CO</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     
    </Nav>
    <Nav>
    <Button variant="outline-light" onClick={props.displayForm}>
       Add a Product
      </Button> 
    </Nav>
  </Navbar.Collapse>
</Navbar>
    
  

     
     

      
      
    )
}
