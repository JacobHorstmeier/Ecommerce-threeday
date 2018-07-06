import React, {Component} from 'react';
import axios from 'axios';
import '../App.css'

class Products extends Component {
    constructor(){
        super();
        this.state = {
            products: []
        }
    }

componentDidMount() {
    axios.get('/api/products').then((res) => {
        this.setState({
            products:res.data
        })
    })
}


    render() {
        console.log(this.state)
        let mappedProducts = this.state.products.map((e,i) => {
            return (
                <div key={i} >
                    <button>
                    id:{e.id}
                    item:{e.item}
                    price:{e.price}
                    quantity:{e.quantity}
                    </button>
                    
                    
                    
                   
                </div>
            )
        })
        return (
            <div className='container'>
                products page
                {mappedProducts}
            </div> 
        )
    }

}

export default Products