import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Content from './Content';
import {BrowserRouter as Router , Switch, Route, Link} from 'react-router-dom';
import Lists from './Lists';
import App from './App';

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
            <Router>
                <div>
               
                    <h3>
                        welcome to react
                    </h3>
                    <ul>
                        <li>
                            <Link to={'/lists'}>Lists</Link>
                        </li>
                        <li>
                            <Link to={'/content'}>Content</Link>
                        </li>
                        <li>
                            <Link to={'/'}>App</Link>
                        </li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route exact path = '/lists' component ={Lists} />
                        <Route exact path = '/content' component ={Content } />
                        <Route exact path = '/' component ={App } />
                    </Switch>
                </div>
                
            </Router>
        //     <div>
        //     <p>number: {this.state.data}</p>
        //     <button onClick = {this.setNewNumber}>Increment</button>
        //     {/* <Lists></Lists> */}
        //     {/* <Content myNumber = {this.state.data}></Content> */}
        // </div>
        )
    };

}


export default MyLifeCycle;