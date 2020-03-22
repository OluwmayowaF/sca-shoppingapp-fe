import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import AdminControl from './pages/AdminControl';
import Product from './pages/Product';
import ShoppingCart from './pages/ShoppingCart'
import Home from './pages/Home';

export class App extends Component {



//function to Edit a product

  render() {
    return (

      <Router>
      <React.Fragment>
      <Switch>
      <Route  exact path="/">
       <Home />
       </Route>
       <Route   path="/adminControl">
       <AdminControl />
       </Route>
       <Route path="/product/:productid"  
            render={(props) => <Product {...props} 
          
            />} />
            <Route path="/viewcart"  
            render={(props) => <ShoppingCart {...props} 
          
            />} />
            </Switch>
       </React.Fragment>
      

      </Router>
     
    )
  }
}

export default App
