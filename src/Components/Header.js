import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './Header.css'
class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            burgerBuilder: true,
            checkout: false
        }
    }
    render(){
        if(this.state.burgerBuilder){
            return(
                <div className='header'>
                <div className='logoAndBrand'>
                    <div className='logo'>
                        <img src={require('../logo.png')} width='60px' height='40px' />
                    </div>
                    <div className='brand'>
                        BurgerApp
                    </div>
                </div>
                <div className='burgerBuilderButton active'>
                        Burger Builder
                </div>
                <div className='checkoutButton'>
                        Checkout
                </div>
            </div>
            )
        }
        if(this.state.checkout){
            return(
                <div className='header'>
                <div className='logoAndBrand'>
                    <div className='logo'>
                        <img src={require('../logo.png')} width='60px' height='40px' />
                    </div>
                    <div className='brand'>
                        BurgerApp
                    </div>
                </div>
                <div className='burgerBuilderButton'>
                        Burger Builder
                </div>
                <div className='checkoutButton active'>
                        Checkout
                </div>
            </div>
            )
        }
    }
}

export default Header

