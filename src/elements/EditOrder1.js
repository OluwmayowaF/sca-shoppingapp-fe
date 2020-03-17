import React, { Component } from 'react'

export class EditOrder extends Component {
    state={
        editBtn: "Edit Product",
       /* name: this.props.name,
        brand:this.props.brand,
        description: this.props.description,
        category:this.props.category,
        price:this.props.price,
        quantity:this.props.quantity,
        selectedProd:this.props.id,
        showSucess: false,
        showFailure: false,*/
        name:'',
        
    }
    onChangeFnc = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
      }
      editProduct= async (event)=>{
        this.setState({
          editBtn:'Loading...'
        })
        event.preventDefault();
        const body = new FormData(this.form)
        let editProductUrl = `https://scashoppingapp-api.herokuapp.com/api/orders/${this.state.selectedProd}`;
       
        try {
          let response = await fetch(editProductUrl, {
            method:'PATCH',
            mode:'cors',
            body,
          });
       
          let data = await response.json();
          if (data.status === "success"){
            this.setState({
                editBtn: "Edit Product",
                showSucess: true,
              })
            console.log(data)
          }else {
            this.setState({
                editBtn: "Edit Product",
                showFailure: false,
              })
            console.log('Error an occured please try again')
          }
       
        }catch(error){
          console.log(error)
        }
       
       
       
       }
    render() {
        const imageLink = `https://res.cloudinary.com/oluwamayowaf/image/upload/${this.props.image}`
        return (
           <div>
        <React.Fragment>
        <div className='Product-form-header'>
            <h5 className='text-center'>Edit Product</h5>
            </div>
            <form ref={el => (this.form = el)} onSubmit={this.editProduct} name='editproductForm' id='editproductForm'  className='Product-form'>
                {this.state.showSucess ? <div className="alert-success">Product has been edited successfully</div> : null}
                {this.state.showFailure ? <div className="alert-danger">An Error occured please refresh and try again</div> : null}
                <div className='red text-center'>
                <img className='rounded mx-auto d-block' width='30%' 
                style={{borderRadius: '80%'}}
                src={imageLink} alt='productimage' />
                </div>
                <div className='pb-2'></div>
            <div className="custom-file">
                
                <input type="file" className="custom-file-input form-control-sm" name="image" id="image" /*onChange={this.handleImagePrev}*/ />
                <label className="custom-file-label" htmlFor="image">Select an Image</label>
            </div>
            
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' className="form-control form-control-sm" id ='name'
                    value={this.state.name}
                    onChange={this.onChangeFnc}
                    required>
                    </input>
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor='brand'>Brand:</label>
                    <input type='text' name ='brand' className="form-control form-control-sm" id ='brand'
                    value={this.state.brand}
                    onChange={this.onChangeFnc}
                    required>
                    </input>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor='description'>Description:</label>
                    <textarea name='description' className="form-control form-control-sm"  id='description'
                    value={this.state.description}
                    onChange={this.onChangeFnc}
                    required>
                    </textarea>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="number" className="form-control form-control-sm"  id="quantity" name='quantity'
                    value={this.state.quantity}
                    onChange={this.onChangeFnc}
                    ></input>
                    </div>
                    <div className="form-group col-md-4">
                    <label htmlFor="price">Price:</label>
                    <input type="number" className="form-control form-control-sm" id="price" name='price'
                    value={this.state.price}
                    onChange={this.onChangeFnc}
                    ></input>
                    </div>
                    <div className="form-group col-md-4">
                    <label htmlFor="category">Category:</label>
                <select id="category" className="form-control form-control-sm" name='category' 
                value={this.state.category} onChange={this.onChangeFnc}>
                        <option value='0' >Choose...</option>
                        <option name='household' value='Household'>Household</option>
                        <option name='electronics' value='Electronics'>Electronics</option>
                        <option name='clothing' value='Clothing'>Clothing</option>
                    </select>
                    </div>
                    
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <input type="submit" className="btn btn-primary text-center"
                        value={this.state.editBtn}
                        /> 
                    </div>
                    <div className="form-group col-md-6">
                        <button type="cancel" onClick ={this.props.hideEditForm} 
                        className="btn btn-danger ">  
                        Close  
                        </button>
                    </div>
                </div>
                
                </form>  
                
            </React.Fragment>
            
        </div>
        )
    }
}

export default EditOrder
