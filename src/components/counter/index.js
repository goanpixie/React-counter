import React, {Component} from 'react';
// import {useState} from 'react';
import './style.scss';

// const CounterComponent = () =>{
//     const [counter, setCounter] = useState(0)

//     return (
//         <div className="counter">
//            <div className="counter-container">
//                <p className ={counter%2===0?"black":"grey"}>{counter}</p>
//                <button onClick={()=>{
//                    setCounter(counter+1)
//                }}>
//                Up
//                </button>
//            </div>
//         </div>
//     )
// }

// class CounterComponent extends Component{
//     constructor(props){
//         super(props);
//         this.state = {counter:0};
//         this.increment = this.increment.bind(this)
//         this.decrement = this.decrement.bind(this)
//         this.reset = this.reset.bind(this)
//     }

//     increment(){
//         this.setState({
//             counter : this.state.counter+1
//         })   
//     }

//     decrement(){
//         this.setState({
//             counter:this.state.counter-1
//         })
//     }

//     reset(){
//         this.setState({
//             counter:0
//         })
//     }


//     render(){
//         return(
//         <div className="counter">
//            <div className="counter-container">
//                <p className ={this.state.counter%2===0?"black":"grey"}>{this.state.counter}</p>
//                <button onClick={this.increment}>Increment</button>
//                <button onClick={this.decrement}>Decrement</button>
//                <button onClick={this.reset}>Reset</button>
//            </div>
//         </div>
//             )
//     }

// }

class CounterComponent extends Component{
    constructor(props){
        super(props);
        this.state = {counter:0}
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }

    increment(){
        this.setState({
            counter:this.state.counter+1
        })
    }

    decrement(){
        this.setState({
            counter:this.state.counter-1
        })
    }

    reset(){
        this.setState({
            counter:0
        })
    }


    render(){
        return(
        <div className="counter">
           <div className="counter-container">
                <p className={this.state.counter%2===0?"black":"grey"}>{this.state.counter}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
           </div>
        </div>
        )
    }
}





export default CounterComponent;