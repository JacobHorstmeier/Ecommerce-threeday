import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class Header extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <Link to='/'>Home </Link>

                <Link to='/products'>Products </Link>
                <Link to='/cart'>Cart </Link>
                <Link to='/checkout'>Checkout </Link>
            </div> 
        )
    }

}

export default Header