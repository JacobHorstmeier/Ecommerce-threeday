import React, {Component} from 'react';
import axios from 'axios';
import '../App.css'

class Products extends Component {
    constructor(){
        super();
        this.state = {
            products: [],
            activeID: 0, //the real question is how to get this 'id' to change based on what I click
            currentProduct: 0
        }
        this.deleteProduct = this.deleteProduct.bind(this)
    }

componentDidMount() {
    axios.get('/api/products').then((res) => {
        this.setState({
            products:res.data
        })
    })
}
// Not quite working yet, the schema is bimyou
// addToCart(i){
//     axios.post('/api/addToCart', {product:this.state.products[i]}).then(() => {
//         alert('Saved To Cart')
//     })
// }



deleteProduct(i){
    this.setState({
        activeID: this.state.products[i].id, currentProduct: i
    })
    // console.log(this.state)
    axios.delete(`/api/deleteProduct/${this.state.activeID}`).then((res) => {
        this.setState({
            products: res.data
        })
    })
}

    render() {
        console.log(this.state)
       
        let mappedProducts = this.state.products.map((e,i) => {
            return (
                <div className='product'key={i} >
                    
                    {/* id:{e.id}<br/> */}
                    item:{e.item}<br/>
                    price:{e.price}<br/>
                    quantity:{e.quantity}<br/>
                    <button >addToCart</button>
                    <button onClick={() => this.deleteProduct(i)}>Delete</button>
                    
                    
                    
                   
                </div>
            )
        })
        return (
            <div className='container'>
                
                {mappedProducts}
            </div> 
        )
    }

}

export default Products