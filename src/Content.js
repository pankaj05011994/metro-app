import React from 'react';

class Content extends React.Component{
    componentWillMount(){
        console.log("componentWillMount 1");
    }
    componentDidMount(){
        console.log("componentDidMount 2");
    }
    componentWillReceiveProps(newProps){
        console.log("componentWillReceiveProps: "+newProps);
    }
    shouldComponentUpdate(newProps, newState){
        return true;
        // console.log("shouldComponentUpdate: "+newProps+" , newState: "+newState);
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
                <span>Content</span>
                <p>myNumber: {this.props.myNumber}</p>
        </div>
    );
}
}

export default Content;