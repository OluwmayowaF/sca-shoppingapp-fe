import React from 'react'

export default function productDetails(props) {
    return (
        <div  >
            
            <p>Description:{props.description}</p>
            <p>{props.quantity} left in stock</p>
           <button className='btn-outline-primary inline'>Edit</button>
           <button className='btn-outline-danger inline'>Delete</button>
        </div>
    )
}
