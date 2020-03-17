import React, { Component } from 'react'


export class productForm extends Component {

  
    render() {
        return (
        <React.Fragment>
        <div className='Product-form-header'>
            <h5 className='text-center'>Add a Product</h5>
            </div>
            <form ref={this.props.form} onSubmit={this.props.addProduct} name='productForm' id='productForm' className='Product-form'>
                {this.props.showSucess ? <div className="alert-success">Product has been created successfully</div> : null}
                {this.props.showFailure ? <div className="alert-danger">An Error occured please refresh and try again</div> : null}
                {/*<div className='red text-center'>
                <img className='rounded mx-auto d-block' width='30%' 
                style={{borderRadius: '80%'}}
                src={this.state.previewImage} alt='previewImage' />
                </div>*/}
                <div className='pb-2'></div>
            <div className="custom-file">
                
                <input type="file" className="custom-file-input form-control-sm" name="image" id="image" /*onChange={this.handleImagePrev}*/ />
                <label className="custom-file-label" htmlFor="image">Select an Image</label>
            </div>
            
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' className="form-control form-control-sm" id ='name'
                    value={this.props.name}
                    onChange={this.props.onChangeFnc}
                    required>
                    </input>
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor='brand'>Brand:</label>
                    <input type='text' name ='brand' className="form-control form-control-sm" id ='brand'
                    value={this.props.brand}
                    onChange={this.props.onChangeFnc}
                    required>
                    </input>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor='description'>Description:</label>
                    <textarea name='description' className="form-control form-control-sm"  id='description'
                    value={this.props.description}
                    onChange={this.props.onChangeFnc}
                    required>
                    </textarea>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="number" className="form-control form-control-sm"  id="quantity" name='quantity'
                    value={this.props.quantity}
                    onChange={this.props.onChangeFnc}
                    ></input>
                    </div>
                    <div className="form-group col-md-4">
                    <label htmlFor="price">Price:</label>
                    <input type="number" className="form-control form-control-sm" id="price" name='price'
                    value={this.props.price}
                    onChange={this.props.onChangeFnc}
                    ></input>
                    </div>
                    <div className="form-group col-md-4">
                    <label htmlFor="category">Category:</label>
                <select id="category" className="form-control form-control-sm" name='category' 
                value={this.props.category} onChange={this.props.onChangeFnc}>
                        <option value='0' >Choose...</option>
                        <option name='household' value='Household'>Household</option>
                        <option name='electronics' value='Electronics'>Electronics</option>
                        <option name='clothing' value='Clothing'>Clothing</option>
                    </select>
                    </div>
                    
                </div>
                <div className="form-row">
                <div className="form-group col-md-6">
                <input type="submit"
                className="btn btn-primary text-center"
                value={this.props.addBtn}/> 
                </div>
                <div className="form-group col-md-6">
                    <button type="cancel" onClick ={this.props.hideForm} className="btn btn-danger float-right">  Close  </button>
                </div>
                </div>
                
                </form>  
                
            </React.Fragment>
        )
    }
}

export default productForm
