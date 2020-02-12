import React, {
    Component
} from 'react'

class Test extends Component {
    constructor() {
        super();
        this.state = {

            count: 0,
        }
    }



    //this is where we are going to put your methods yay!

    Increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    Decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (

            <div className="Containner">
                <nav className"navbar">Counter</nav> 
                <div className"counter">
                  <h1>{this.state.count}</h1> 
                  <button className="button" onClick = {this.Increment}> Increment </button> 
                  <button className="button" onClick={this.Decrement}> Decrement </button>
                </div> 
            </div>
        )
    }
}

export default Test;






// <input type="reset" className="button" placeholder>


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
