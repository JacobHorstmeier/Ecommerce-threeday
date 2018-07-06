import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Products from '../components/Products'
import Checkout from '../components/Checkout'
import Cart from '../components/Cart'
import Home from '../components/Home'

export default (
    <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/products' component={Products}  />
        <Route path='/cart' component={Cart}  />
        <Route path='/checkout' component={Checkout}  />
    </Switch>
)