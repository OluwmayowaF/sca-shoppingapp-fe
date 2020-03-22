import React from 'react';
import { Navbar, Nav }from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineShopping } from "react-icons/ai";
import { IconContext } from "react-icons";


export default function ProdHeader(props) {
    return (  
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand className='pl-2'><Link style={{textDecoration:'none', color:'#fff'}} to='/'>MBS.CO</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     
    </Nav>
    <Nav>
    <Link style={{textDecoration:'none'}} to='/viewcart'>
    <IconContext.Provider value={{ color: props.cartStatus || "#CECECE", size: '3em', className: "global-class-name" }}>
          <div>
            <AiOutlineShopping />
           </div>
    </IconContext.Provider>
    </Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      
    )
}
