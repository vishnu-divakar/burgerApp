import React, {Component} from 'react'
import './Burger.css'
class Burger extends Component{
    render(){
        let salad= this.props.salad
        let bacon=this.props.bacon
        let cheese=this.props.cheese
        let meat=this.props.meat
        let saladList =[];
        let baconList= [];
        let cheeseList=[];
        let meatList=[];
        for(let i=0; i<salad; i++){
            saladList.push(
                <img src={require('../ingredients/salad.png')} />
            )
        }
        for(let i=0; i<bacon; i++){
            baconList.push(
                <img src={require('../ingredients/bacon.png')} />
            )
        }
        for(let i=0; i<cheese; i++){
            cheeseList.push(
                <img src={require('../ingredients/cheese.png')} />
            )
        }
        for(let i=0; i<meat; i++){
            meatList.push(
                <img src={require('../ingredients/meat.png')} />
            )
        }
        return(
            <div className='burgerCanvas'>
                <div className='topBun'>
                    <img src={require('../ingredients/topBun.png')} />
                </div>
                <div className='salad'>
                    {saladList}
                </div>
                <div className='bacon'>
                    {baconList}
                </div>
                <div className='cheese'>
                    {cheeseList}
                </div>
                <div className='meat'>
                {meatList}
                </div>
                <div className='bottomBun'>
                    <img src={require('../ingredients/bottomBun.png')} />
                </div>
            </div>
        )
    }
}

export default Burger