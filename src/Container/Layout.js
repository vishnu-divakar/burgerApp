import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from '../Components/Header'
import Body from '../Components/Body'
class Layout extends Component{
    render(){
        return(
            <div className='layout' > 
                <Header />
                <Body />
            </div>
        )
    }
}

export default Layout