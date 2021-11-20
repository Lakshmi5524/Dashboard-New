import React from 'react'
import Topbar from "./Components/topbar/Topbar"
import Sidebar from './Components/sidebar/Sidebar';
import Home from './pages/home/Home'
import UserList from "./pages/UserList/UserList"
import User from "./pages/user/User"
import Newuser from "./pages/Newpage/Newuser"
import ProductList from './pages/ProductList/ProductList'
import Product from './pages/Product/Product';
import NewProduct from './pages/Newproduct/NewProduct'
import './app.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router >
      <Topbar />
      <div className="container">
        <Sidebar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>

          <Route path="/user/:userId">
            <User />
          </Route>

          <Route path="/newUser">
            <Newuser />
          </Route>

          <Route path="/products">
            <ProductList />
          </Route>

          <Route path="/product/:productId">
            <Product />
          </Route>

          <Route path="/newproduct">
            <NewProduct />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
