import React, { Component } from 'react';
import Header from '../layout/header';
import Items from '../layout/items';
import AddProduct from '../layout/addProduct';

export class AdminControl extends Component {

constructor(props) {
    super(props);
    this.form = React.createRef();
    
    }
    state={
    addBtn: "Add Product",
    name:"",
    brand:"",
    description:"",
    category:"",
    price:"",
    quantity:"",
    selectedProd:'',
    previewImage: "https://res.cloudinary.com/oluwamayowaf/image/upload/v1584127777/SCA/noimage.jpg",
    showSucess: false,
    showFailure: false,
    showDelSuccess: false,
    showDelFailure: false,
    showForm: false,
    showDelete: false,
    items:null,
    showEdit:false,
    }
    // React Hook 
    componentDidMount =()=>{
    this.viewProducts();
    }
    // Function to view products from the DB
    viewProducts = async () =>{
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
        console.log(status)
    }
    } 
    // Update the state of the input fields
    onChangeFnc = (e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
    }
    // Update state of the image
    handleImagePrev =(e) =>{
    this.setState({
        showSucess: false
        // previewImage: URL.createObjectURL(e.target.files[0])
        // previewImage: new Blob([e.target.files.buffer]),
        //previewImage: srcObject(e.target.files.buffer[0])
    })
    // console.log(URL.createObjectURL(e.target.files[0]))
    // console.log(new Blob([e.target.files[0].buffer], {type : "text/plain"}))
    }
    // Function to add a product
    addProduct  = async  (e) =>{
    
    this.setState({addBtn: 'Loading...'})
    e.preventDefault();
    
    const body =  new FormData(this.form.current);  
    let addProductUrl = 'https://scashoppingapp-api.herokuapp.com/api/orders';
    
    try{
    let response = await fetch(addProductUrl,{
    method:'POST',
    mode:'cors',
    body,
    });
    let responseData = await response.json();
    const {status, data} = responseData
    
    
    if(status === "success"){
    console.log(data)
    this.viewProducts();
    this.setState({addBtn: 'Add Product',
        name:"",
        brand:"",
        description:"",
        category:"",
        price:"",
        quantity:"",
        previewImage: "https://res.cloudinary.com/oluwamayowaf/image/upload/v1584127777/SCA/noimage.jpg",
        showSucess: true
    })
    }else{
    this.setState({showFailure: true})
    console.log (responseData.error)
    }
    
    
    }catch(error){
    console.log(error)
    }
    
    }
    // Function to display add product modal
    displayForm =()=>{
        this.setState({
            showForm:true
        })
    
    }
    // Function to hide add product modal
    hideForm =()=>{
        this.setState({
            showForm:false,
            showSucess:false,
            showDelete:false
        })
    }
    
    // function to show edit form modal
    showEditForm =()=>{
    this.setState({
        showEdit:true
    })
    
    }
    // function to hide edit form modal
    hideEditForm =()=>{
    this.setState({
        showEdit:false,
    
    })
    }

    render() {
        return (
        <React.Fragment>
            <Header 
       displayForm = {this.displayForm}
       hideForm = {this.hideForm}/>
   
    
       <AddProduct  
       addProduct = {this.addProduct}
       onChangeFnc = {this.onChangeFnc}
       displayForm = {this.displayForm}
       hideForm = {this.hideForm}
       showForm = {this.state.showForm}
       addBtn = {this.state.addBtn}
       name = {this.state.name}
       brand = {this.state.brand}
       description = {this.state.description}
       category = {this.state.category}
       price = {this.state.price}
       quantity = {this.state.quantity}
       previewImage = {this.state.previewImage}
       showSucess = {this.state.showSucess}
       form = {this.form}
       />
         
       <Items 
         items = {this.state.items}
         viewProducts = {this.viewProducts}
         showDelete = {this.state.showDelete}
         hideDeleteForm = {this.hideDeleteForm}
         showDeleteForm = {this.showDeleteForm}
         deleteProduct = {this.deleteProduct}
         showDelSuccess = {this.state.showDelSuccess}
         showDelFailure = {this.state.showDelFailure}
         showEdit = {this.state.showEdit}
         hideEditForm = {this.hideEditForm}
         showEditForm = {this.showEditForm}
         onChangeFnc = {this.onChangeFnc}
       />
       </React.Fragment>
        )
    }
}

export default AdminControl
