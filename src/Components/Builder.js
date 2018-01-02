import React ,{Component} from 'react'
import './Builder.css'
import Control from './Control'
class Builder extends Component{
    constructor(props){
        super(props)
        this.burgerHandle = this.props.burgerHandle
    }
    render(){
        let salad= this.props.salad
        let bacon=this.props.bacon
        let cheese=this.props.cheese
        let meat=this.props.meat
        const bunPrice = 10
        const saladPrice = 15
        const baconPrice = 20
        const cheesePrice = 10
        const meatPrice = 30
        let totalPrice = 0
        totalPrice = bunPrice + (salad * saladPrice) + (bacon * baconPrice)+ (cheese * cheesePrice) 
                    + (meat * meatPrice)
        return(
            <div className='builder'>
                <div className='totalprice'>
                    <p>Total Price : &#8377; <span style={{color:'blue'}}>{totalPrice}</span></p>
                </div>
                <Control label='Salad' count={salad} burgerHandle={this.burgerHandle} />
                <Control label='Bacon' count={bacon} burgerHandle={this.burgerHandle} />
                <Control label='Cheese' count={cheese} burgerHandle={this.burgerHandle} />
                <Control label='Meat' count={meat} burgerHandle={this.burgerHandle} />
            </div>
        )
    }
}

export default Builder