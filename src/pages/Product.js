import React, { Component } from 'react'
import ViewAProduct from '../layout/ViewAProduct'
import ProdHeader from '../layout/ProdHeader'
export class Product extends Component {
   
    state ={
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
  
   
    render() {

        return (
            <div>
                <ProdHeader />
                <ViewAProduct 
                item={this.state.item}
                image_link={this.state.image_link}
                />
            </div>
        )
    }
}

export default Product
