import React, { Component } from 'react'
import Header from '../layout/header'
import ViewAnItem from '../layout/viewAnItem'

export class AdminControlProduct extends Component {
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
            item:'',
            image_link:''            
        }

    componentDidMount =() => {
        this.getProduct();
    }

    getProduct = async () => {
        const {productid} = this.props.match.params
        const viewAproductUrl = `https://scashoppingapp-api.herokuapp.com/api/orders/${productid}`

        let response = await fetch(viewAproductUrl, {
            method: 'GET',
            mode: 'cors'
        })

        let resData = await response.json();
         const {data, image_link } = resData
        console.log(data.order[0])
        
        this.setState({
            item:data.order[0],
            image_link
        })
    }

    // function to display delete product modal 
    showDeleteForm =()=>{
        this.setState({
            showDelete:true
        })
        
        }
        // function to hide delete product modal
        hideDeleteForm =()=>{
        this.setState({
            showDelete:false,
            showDelSuccess: false,
            showDelFailure: false,
        })
        }
        // function to delete a product
        deleteProduct = async (event) =>{
        const product_id = event.target.value;
        const deleteProductUrl = `https://scashoppingapp-api.herokuapp.com/api/orders/${product_id}`
        
        try{
            let response = await fetch (deleteProductUrl,{
            method:'DELETE',
            mode:'cors',
            headers:{
                Accept:'application/json'
            }
            });
        
            let data = await response.json();
            if (data.status === 'success'){
            this.setState({showDelSuccess: true})
            setTimeout(() => this.props.history.push('/adminControl') , 300);
        
            }else {
            this.setState({showDelFailure: true})
            }
            
        
        
        }catch(error){
            console.log(error)
        }
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
    onChangeFnc = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        }
    render() {
        return (
            <div>
                <Header />
                <ViewAnItem 
                item={this.state.item}
                image_link={this.state.image_link}
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
         getProduct = {this.getProduct}
                />
            </div>
        )
    }
}

export default AdminControlProduct
