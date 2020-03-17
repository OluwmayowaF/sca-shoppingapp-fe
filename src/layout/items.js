import React, { Component } from 'react';
import Item from '../elements/item';


export class items extends Component {

    
   
 render() {
        return (
            <div className='row'>
            <div className = 'item-grid'>
            {this.props.items !== null ?
                    this.props.items.map((item, key)=>(
                        <div key={item._id}> 
                        <Item 
                    name = {item.name}
                    brand = {item.brand ? item.brand: 'not-set'} 
                    price={item.price}
                    image={item.image}
                    description ={item.description}
                    quantity = {item.quantity}
                    category = {item.category}
                    id={item._id}
                    hoverActive = {this.props.hoverActive}
                    toggleHoverState = {this.props.toggleHoverState}
                     projectHover = {this.props.projectHover}
                     showDelete = {this.props.showDelete}
                     hideDeleteForm = {this.props.hideDeleteForm}
                    showDeleteForm = {this.props.showDeleteForm}
                    deleteProduct = {this.props.deleteProduct}
                    showDelSuccess = {this.props.showDelSuccess}
                    showDelFailure = {this.props.showDelFailure}
                    showEdit = {this.props.showEdit}
                    hideEditForm = {this.props.hideEditForm}
                    showEditForm = {this.props.showEditForm}
                    onChangeFnc = {this.props.onChangeFnc}
                    editForm = {this.props.editForm}
                    editProduct = {this.props.editProduct}
                    selectedProd = {this.props.selectedProd}
                    />
                    </div>
                    
                     )

                ):
                    null}
               

            </div>
                
                
            </div>
        )
    }
}

export default items
