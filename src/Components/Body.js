import React, { Component } from 'react'
import Burger from './Burger'
import Builder from './Builder'
class Body extends Component{
    constructor(props){
        super(props);
        this.state={
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1,
        }
        this.burgerhandle=this.burgerhandle.bind(this)
    }
    burgerhandle(label,action){
        let value=0
        if(label === 'salad'){
            value=this.state.salad
            switch(action){
                case 'add': this.setState({
                                salad: value+1
                                }
                            )
                            break
                case 'sub':if(value>0){
                    this.setState({
                        salad:value-1
                    })
                }
            }
        }else if(label === 'bacon'){
            value=this.state.bacon
            switch(action){
                case 'add': this.setState({
                                bacon: value+1
                                }
                            )
                            break
                case 'sub':if(value>0){
                    this.setState({
                        bacon:value-1
                    })
                }
            }
        }else if(label === 'cheese'){
            value=this.state.cheese
            switch(action){
                case 'add': this.setState({
                                cheese: value+1
                                }
                            )
                            break
                case 'sub':if(value>0){
                    this.setState({
                        cheese:value-1
                    })
                }
            }
        }else if(label === 'meat'){
            value=this.state.meat
            switch(action){
                case 'add': this.setState({
                                meat: value+1
                                }
                            )
                            break
                case 'sub':if(value>0){
                    this.setState({
                        meat:value-1
                    })
                }
            }
        }
    }
    render(){
        return(
            <div className='body'>
                <Burger
                salad={this.state.salad}
                bacon={this.state.bacon}
                cheese={this.state.cheese}
                meat={this.state.meat}
                />
                <Builder
                salad={this.state.salad}
                bacon={this.state.bacon}
                cheese={this.state.cheese}
                meat={this.state.meat}
                burgerHandle={this.burgerhandle}
                />
            </div>
        )
    }
}

export default Body