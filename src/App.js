import React, { Component } from 'react';
import "./App.css"

export default class App extends Component{
    state = {
        number: 0
    }
    
    somar = () => {
        if(this.state.number <= 9){
            this.setState({
                number: this.state.number + 1
            })
        }
    }

    subtrair = () => {
        if(this.state.number >= 1){
            this.setState({
                number: this.state.number - 1
            })
        }
    }

    render(){
        return(
            <div className="card">
                <h1>Contador</h1>
                <h2>{this.state.number}</h2>
                <nav>
                    <button onClick={this.somar}>+</button>
                    <button onClick={this.subtrair}>-</button>
                </nav>
            </div>
        )
    }

}