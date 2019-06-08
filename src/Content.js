import React, {Component} from 'react';
import ReactDOM from 'react-dom';
var ReactCSSTransitionGroup = require('react-addons-transition-group');
class Content extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: ''
        }
        this.updateState = this.updateState.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }
    updateState(e){
        this.setState({
            data: e.target.value
        })
    }
    clearInput(){
        this.setState ({
            data : ""
        })
        ReactDOM.findDOMNode(this.refs.myText).focus();
    }
    componentWillMount(){
        console.log("componentWillMount 1");
    }
    componentDidMount(){
        console.log("componentDidMount 2");
    }
    componentWillReceiveProps(newProps){
        console.log("componentWillReceiveProps: "+newProps);
    }
    shouldComponentUpdate(){
        return true;
        
    }
    componentWillUpdate(newProps, newState){
        console.log("componentWillUpdate: "+newProps+" , newState: "+newState);
    }
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate: "+prevProps+" , prevState: "+prevState);
    }
    componentWillUnmount(){
        console.log("componentWillUnmount: ");
    }
render (){
    return(
        <div>
             <ReactCSSTransitionGroup transitionName = 'example'
    transitionAppear = {true} transitionAppearTimeout = {9000}
    transitionEnter = {true} transitionLeave = {false} >
      <h5>My Transition</h5>
    </ReactCSSTransitionGroup>
    <br></br>
                <span>Content</span>
                <p>myNumber: {this.props.myNumber}</p>
                <hr></hr>
                 <input type = "text" value = {this.state.data}
                onChange = {this.updateState} ref = "myText" />
                <h6>{this.state.data}</h6>
                <button onClick = {this.clearInput}>Clear</button>
        </div>
    );
}
}

export default Content;