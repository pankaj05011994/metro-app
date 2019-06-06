import React from 'react';
// import PropTypes from 'prop-types';
// import './App.css';
import Content from './Content';

class MyLifeCycle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: 0
        }
        this.setNewNumber = this.setNewNumber.bind(this)
    };
    setNewNumber(){
        this.setState(
            {
                data: this.state.data + 1
            }
        )
    }
    render () {
        return(
            <div>
                <p>number: {this.state.data}</p>
                <button onClick = {this.setNewNumber}>Increment</button>
                <Content myNumber = {this.state.data}></Content>
            </div>
        )
    };

}


export default MyLifeCycle;