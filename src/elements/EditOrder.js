import React from 'react'

export default function EditOrder(props) {
    return (
          <div>
        <React.Fragment>
        <div className='Product-form-header'>
            <h5 className='text-center'>Edit Product</h5>
            </div>
            <form 
            //ref={el => (this.form = el)} 
                ///onSubmit={editProduct} 
                name='editproductForm' id='editproductForm'  className='Product-form'>
                {props.showSucess ? <div className="alert-success">Product has been edited successfully</div> : null}
                {props.showFailure ? <div className="alert-danger">An Error occured please refresh and try again</div> : null}
                <div className='red text-center'>
                <img className='rounded mx-auto d-block' width='30%' 
                style={{borderRadius: '80%'}}
                //src={imageLink} 
                alt='productimage' />
                </div>
                <div className='pb-2'></div>
            <div className="custom-file">
                
                <input type="file" className="custom-file-input form-control-sm" name="image" id="image" /*onChange={handleImagePrev}*/ />
                <label className="custom-file-label" htmlFor="image">Select an Image</label>
            </div>
            
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' className="form-control form-control-sm" id ='name'
                    value={props.name}
                    onChange={props.onChangeFnc}
                    required>
                    </input>
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor='brand'>Brand:</label>
                    <input type='text' name ='brand' className="form-control form-control-sm" id ='brand'
                    value={props.brand}
                    onChange={props.onChangeFnc}
                    required>
                    </input>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor='description'>Description:</label>
                    <textarea name='description' className="form-control form-control-sm"  id='description'
                    value={props.description}
                    onChange={props.onChangeFnc}
                    required>
                    </textarea>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="number" className="form-control form-control-sm"  id="quantity" name='quantity'
                    value={props.quantity}
                    onChange={props.onChangeFnc}
                    ></input>
                    </div>
                    <div className="form-group col-md-4">
                    <label htmlFor="price">Price:</label>
                    <input type="number" className="form-control form-control-sm" id="price" name='price'
                    value={props.price}
                    onChange={props.onChangeFnc}
                    ></input>
                    </div>
                    <div className="form-group col-md-4">
                    <label htmlFor="category">Category:</label>
                <select id="category" className="form-control form-control-sm" name='category' 
                value={props.category} onChange={props.onChangeFnc}>
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
                        value={props.editBtn}
                        /> 
                    </div>
                    <div className="form-group col-md-6">
                        <button type="cancel" onClick ={props.hideEditForm} 
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
