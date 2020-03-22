import React, { Component } from 'react'
import CartItem from '../elements/cartItem'
import ProdHeader from '../layout/ProdHeader'
import { Container } from 'react-bootstrap'
import { Row, Col, Button } from 'react-bootstrap'
import swal from 'sweetalert'
import { IconContext } from 'react-icons'
import { FaArrowLeft } from 'react-icons/fa'

export class ShoppingCart extends Component {
    state= {
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        total: '',
        selectedProd: ''
    }

    componentDidMount = () =>{
        //this.getTotal();
console.log(this.state.cart.length)
        if(this.state.cart.length > 0 ){
            setTimeout(
                () => this.getTotal(),
                500
              );

        }          
    }
 
    getTotal = () =>{
        console.log(this.state.cart)
        let totalCart = Object.values(this.state.cart);
        if (this.state.cart.length > 1){
            totalCart = totalCart.reduce((a,b)=> Number (a.subtotal )+ Number( b.subtotal))
            this.setState({total:totalCart})
            console.log(totalCart)
           
        }else{
            if(this.state.cart.length === 0){
                this.setState({total:0})
            }
            let subTotal = this.state.cart[0].subtotal
            this.setState({total:subTotal})
            console.log(totalCart) 
        }
    }
    

    IncreaseItemQuantity = (cartitem) =>{
        console.log('adding')
       
       // let cart = JSON.parse(localStorage.getItem('cart'));
       let cart = this.state.cart;
        let item = cart.find(item => {
            return item.id === cartitem;
        }) 
        console.log(cartitem)
        if(item){
            item.quantity++;
                item.subtotal = item.price* item.quantity
                this.getTotal();
                localStorage.setItem('cart', JSON.stringify(cart));
               
                this.setState({  cart: JSON.parse(localStorage.getItem('cart'))})
                

        }
    }

    reduceItemQuantity = (cartitem) =>{
        console.log('reducing')
       
        let cart = this.state.cart;
        let item = cart.find(item => {
            return item.id === cartitem;
        }) 
        console.log(cartitem)
        if(item && item.quantity > 1){
            item.quantity--;
                item.subtotal = item.price* item.quantity
                localStorage.setItem('cart', JSON.stringify(cart));
                this.setState({  cart: JSON.parse(localStorage.getItem('cart'))})
                this.getTotal();
                

        }
    }

    deleteCartItem = (cartitem) =>{
        console.log('delete')
        let cart = this.state.cart
        let item = cart.find(item => {
            return item ? item.id === cartitem : null;
        }) 

        console.log(item, item.id, cartitem)
        if(item){
            const index = cart.indexOf(item);
          
           if (index > -1) {
            console.log(item, index)
              cart.splice(index, 1);
               localStorage.setItem('cart', JSON.stringify(cart));
               this.setState({  cart: JSON.parse(localStorage.getItem('cart'))})
               if(this.state.cart.length !== 0){
                this.getTotal();
               }
               
            
            }
              
        }
    }
    checkoutMessage = () =>{
        swal({
            text:'Thanks for your patronage',
            icon: 'success'
        })
        this.setState({cart:localStorage.removeItem('cart')});

    }

    render() {

        return (
            <React.Fragment>
            <ProdHeader />  
              
            <Container>
            <Row className='my-5'>
                
                <IconContext.Provider value={{ color: "#088AFF", size: '2em', className: "global-class-name" }}>
                    <FaArrowLeft  onClick={() => this.props.history.goBack()} />
                </IconContext.Provider>
                </Row>

                <Row>
                    <h3 style={{color:'#696969'}} className='mb-5 mt-2 text-center'>Shopping Bag</h3>
                </Row>
               
            <Row style={{color:'#A9A9A9'}}>
                <Col></Col>
                <Col><h5>Product</h5></Col>
                <Col><h5>Price</h5></Col>
                <Col><h5>Quantity</h5></Col>
                <Col><h5>Subtotal</h5></Col>
                <Col></Col>
            </Row>
            <hr></hr>
            
                 
                   { this.state.cart.map((carts, key) => (
                    <div key={carts.id}>
                   <CartItem 
                   name ={carts.name}
                   price = {carts.price}
                   quantity = {carts.quantity}
                   image = {carts.image}
                   subtotal = {carts.subtotal}
                   id = {carts.id}
                   IncreaseItemQuantity = {this.IncreaseItemQuantity}
                   reduceItemQuantity = {this.reduceItemQuantity}
                   deleteCartItem = {this.deleteCartItem}
                   />
                   </div>
                    
                ))}
                {this.state.cart.length === 0 ? <Row ><Col className='text-center text-dark'><h5>No Items have been added to your cart</h5> </Col></Row>:  
                <React.Fragment>
                <Row style={{color:'#696969'}}>
                <Col><h5 className='pl-3'>Total:</h5></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col><h5>{this.state.total }</h5></Col>
                <Col></Col>
            </Row>
               
        <Row className='mb-5'>
             
              <Col >
              <Button onClick={this.checkoutMessage}>CheckOut</Button>
              </Col>
              
        </Row>    
        </React.Fragment>  
       }
        </Container>
        
        </React.Fragment>  
        )
    }
}

export default ShoppingCart
