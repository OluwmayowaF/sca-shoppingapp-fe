import React, { Component } from 'react'
import ProdHeader from '../layout/ProdHeader';
import CustomerItems from '../layout/CustomerItems';
import Footer from '../layout/Footer';
import swal from 'sweetalert';


export class Home extends Component {
    state ={
    items:null,
    
    }

    componentDidMount =()=>{
        this.viewProducts()
    }
      // Function to view products from the DB
      viewProducts = async () =>{

    try {
        const getAllProductsUrl = 'https://scashoppingapp-api.herokuapp.com/api/orders'
        
        let response = await fetch(getAllProductsUrl, {
            method:'GET',
            headers:{
                "Content-type":"application/json",
                Accept:"application/json"
            }
        });
        
        let responseData = await response.json();
        const {status, data} = responseData;
        if (status === "success"){
            let  { order} = data
            order = order.sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt))
            this.setState({items:order})
            console.log(order)
        }else {
            swal({
                    
                text: `Something went wrong check your internet connection and try again`,
                icon: "error",
              });
            console.log(status)
            }
            }catch(error){
                swal({
                    
                    text: `Something went wrong check your internet connection and try again`,
                    icon: "error",
                  });
                console.log(error)
                }
            

            
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
           <React.Fragment>
               <ProdHeader />
               <CustomerItems 
            
         items = {this.state.items}
         viewProducts = {this.viewProducts}
         addToCart = {this.addToCart}
       
       />
<Footer />
           </React.Fragment>
        )
    }
}

export default Home
