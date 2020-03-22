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
    render() {
        return (
           <React.Fragment>
               <ProdHeader />
               <CustomerItems 
            
         items = {this.state.items}
         viewProducts = {this.viewProducts}
       
       />
<Footer />
           </React.Fragment>
        )
    }
}

export default Home
