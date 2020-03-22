import React, { Component } from 'react'
import { AiOutlineShopping } from "react-icons/ai";
import { IconContext } from "react-icons";

export class shoppingCart extends Component {
    render() {
        return (
    <IconContext.Provider value={{ color: "#CECECE", size: '4em', className: "global-class-name" }}>
          <div>
            <AiOutlineShopping />
           </div>
    </IconContext.Provider>
   
        )
    }
}

export default shoppingCart
