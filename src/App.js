import React from 'react';
import PropTypes from 'prop-types';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
   
    
     /* <div className="App" >
       <header className="App-header" >
         <img src={
           logo
         }
           className="App-logo"
           alt="logo" />
         <p >
           Edit <code > src / App.js </code> and save to sign in. 
           </p> 
     <a className="App-link"
               href="https://reactjs.org"
               target="_blank"
               rel="noopener noreferrer" >
               Learn React </a>
              </header> 
              </div> */
    <div className="game">
    <div className="game-board">
      <Board headerText="My Header" name="Metro App github pankaj05011994"/>
      <hr/>
      <Board>this is the button</Board>
    </div>
    <div className="game-info">
      <div>{/* status */}</div>
      <ol>{/* TODO */}</ol>
    </div>
  </div>);
      }
      function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

      class Board extends React.Component {
        btnClick(){
          alert("botton is clicked");
        }
        constructor(props) {
          super(props);
          this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
          };
        }
        handleClick(i) {
          const squares = this.state.squares.slice();
          squares[i] = this.state.xIsNext ? 'X' : 'O';
          this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
          });
        }
      
        renderSquare(i) {
          return <Square value={this.state.squares[i]}
          onClick={() => this.handleClick(i)} />;
        }
      
        render() {
          const winner = calculateWinner(this.state.squares);
          let status;
          if (winner) {
            status = 'Winner: ' + winner;
          } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
          }
          return (
            <div>
              <span>{this.props.children}</span>
              <p>click in the button</p>
              <button onClick = {this.btnClick}>click me</button>
               <h1>Header: {this.props.headerText}</h1>
               <h3>Name: {this.props.name}</h3>
               <h4>FullName: {this.props.fullName}</h4>
               <h4>Array: {this.props.propArray}</h4>
               <h4>Boolean: {this.props.propBoolean ? "True..." : "False..."}</h4>
               <h4>Function: {this.props.propFunction(5)}</h4>
               <h4>Number: {this.props.propNumber}</h4>
               <h4>String: {this.props.propString}</h4>
              <div className="status">{status}</div>
              <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
              </div>
              <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
              </div>
              <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
              </div>
            </div>
          );
        }
      }

      Board.propTypes = {
        headerText : PropTypes.string,
        name: PropTypes.string,
        fullName: PropTypes.string,
        propArray: PropTypes.array.isRequired,
        propBoolean: PropTypes.bool.isRequired,
        propFunction: PropTypes.func,
        propNumber: PropTypes.number,
        propString: PropTypes.string


      }

      Board.defaultProps = {
        name : "pankaj 5",
        fullName: "pankaj chhawchharia",
        propArray: [1,2,3,4,5],
        propBoolean: true,
        propFunction: function(e) {
          return e;
        },
        propNumber: 6,
        propString: "my name is ...",

      }

     
            function Square(props) {
              return (
                <button className="square" onClick={props.onClick}>
                  {props.value}
                </button>
              );
            }
      
export default App;