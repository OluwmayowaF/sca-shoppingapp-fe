import React, { Component } from 'react';
import {Container, Row, Col, Button, Spinner} from 'react-bootstrap';
import { withRouter } from 'react-router'
import { FaArrowLeft } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import swal from 'sweetalert';

export class ViewAProduct extends Component {

    state ={
        updated:false,
        
    }


 addToCart = (addTocartButton) => {
     this.setState({updated:false})
     let cart = JSON.parse(localStorage.getItem('cart')) || [];
     
        if (cart.length === 0){
            let item = {
                id: this.props.item._id,
                name: this.props.item.name, 
                price: this.props.item.price, 
                subtotal:  Number(this.props.item.price) * 1, 
                image: `${this.props.image_link}${this.props.item.image}`,
                quantity: 1
            } 
            cart.push(item);
            this.setState({updated:true})
            addTocartButton.value = 'View Shopping Bag'
            swal ({
                title: "Awesome Choice!",
                text: "What do you want to do now?",
               
                buttons: {
                    continue:{
                        text: "Continue Shopping",
                        value: "continue"
                    },
                    viewBag:{
                        text: "View Bag",
                        value: "viewBag"
    
                    }
                },
               
              })
              .then((value) => {
                switch (value) {
    
                    case "continue":
                        this.props.history.goBack()
                      break;
                 
                    default:
                        this.props.history.push(`/viewCart`)
                  }
              });
    
            localStorage.setItem('cart', JSON.stringify(cart))       
        }else{
            let item = cart.find(item =>{
                return item.id === this.props.item._id;
            });
            if (item){
                item.quantity++;
                item.subtotal = item.price* item.quantity
                this.setState({updated:true})
                addTocartButton.value = 'View Shopping Bag'
                localStorage.setItem('cart', JSON.stringify(cart));
                swal ({
                    title: "Awesome Choice!",
                    text: "What do you want to do now?",
                   
                    buttons: {
                        continue:{
                            text: "Continue Shopping",
                            value: "continue"
                        },
                        viewBag:{
                            text: "View Bag",
                            value: "viewBag"
        
                        }
                    },
                   
                  })
                  .then((value) => {
                    switch (value) {
        
                        case "continue":
                            this.props.history.goBack()
                          break;
                     
                        default:
                            this.props.history.push(`/viewCart`)
                      }
                  });
        
                
            } else {
                let item = {
                   id: this.props.item._id,
                   name: this.props.item.name, 
                   price: this.props.item.price, 
                   subtotal: Number(this.props.item.price) * 1, 
                   image: `${this.props.image_link}${this.props.item.image}`,
                   quantity: 1
                };
                cart.push(item);
                this.setState({updated:true})
                addTocartButton.value = 'View Shopping Bag'
                swal ({
                    title: "Awesome Choice!",
                    text: "What do you want to do now?",
                   
                    buttons: {
                        continue:{
                            text: "Continue Shopping",
                            value: "continue"
                        },
                        viewBag:{
                            text: "View Bag",
                            value: "viewBag"
        
                        }
                    },
                   
                  })
                  .then((value) => {
                    switch (value) {
        
                        case "continue":
                            this.props.history.goBack()
                          break;
                     
                        default:
                            this.props.history.push(`/viewCart`)
                      }
                  });
        
                localStorage.setItem('cart', JSON.stringify(cart));
            }
        }
        
 }
    
   
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
                   {/* <hr></hr>
                    <h6>Amount left:{this.props.item.quantity}  </h6>*/ }
                    <Button id='addTocartButton' onClick ={() => this.addToCart(document.querySelector('#addTocartButton'))}> ADD TO SHOPPING BAG</Button>
                    {/*this.state.updated ?  <div className="alert-success">Added to cart successfully</div> :null*/}
                    <hr></hr>
                    <h6> <b>Description</b></h6> 
                    <p> {this.props.item.description}</p>
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

            </Container>
        )
    }
}

export default withRouter(ViewAProduct)
