import React, {Component} from 'react'
import Add from 'material-ui-icons/Add'
import Remove from 'material-ui-icons/Remove'
import './Control.css'
class Control extends Component{
    constructor(props){
        super(props)
        this.burgerHandle=this.props.burgerHandle
        this.actionHandle=this.actionHandle.bind(this)
    }
    actionHandle(label,action){
        this.burgerHandle(label,action)
    }
    render(){
        let label=this.props.label
        let count=this.props.count
        let name='countDiv ' + label
        return(
            <div className='Control'>
                <div className='label'>
                    {label}
                </div>
                <div className={name}>
                    <Remove 
                        onClick ={ () => this.actionHandle(label.toLowerCase(),'sub')}
                    /> <div className='count'>{count}</div>
                    <Add
                        onClick= { () => this.actionHandle(label.toLowerCase(), 'add') }
                    />
                </div>
            </div>
        )
        
    }
}
export default Control