import React, {Component} from 'react';


class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }
  // this is where we are going to put our methods.

  increment = () => {


    if (this.state.count < 20) {
      this.setState({
        count: this.state.count + 1
      })
    } else {
      this.setState({
        count: this.state.count = 20
      })

    }

  }
  decrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      })
    } else {
      this.setState({
        count: this.state.count = 0
      })

    }
  }

  reset = () => {
    this.setState({
      count: this.state.count = 0
    })
  }

  toggleIn = () => {
    if (this.state.count < 20) {
      this.setState({
        count: this.state.count + 10
      })
    } else {
      this.setState({
        count: this.state.count = 20
      })
    }

  }

  toggleDe = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 10
      })
    } else {
      this.setState({
        count: this.state.count = 0
      })
    }
  }

  render() {
    let color = 'red';
    return (
      <div className= "container">
      <nav className= "navbar"> Counter < /nav>

      <div className= "counter">
      <h1 > {
        this.state.count
      } </h1>
      <button type = "button"
      onClick = {
        this.increment
      } > + </button>
      <button type = "button"
      onClick = {
        this.decrement
      } > - </button>

      <button type = "button"
      onClick = {
        this.toggleIn
      } > 10+ < /button>
      <button type = "button"
      onClick = {
        this.toggleDe
      }> 10- </button>
      <button type = "button"
      onClick = {
        this.reset
      } > Reset </button>

      </div>
        <h1 className="footer"> <hr style={{
    height: .5,
    width: 230,
    borderColor : 'red'
}}/> First React Project | Copyright @ MH Jafory</h1>
      </div>


    )
  }
}
export default Counter;







// import React, {Component} from 'react'

//
// class Test extends Component {
//     constructor() {
//         super();
//         this.state = {
//
//             count: 0,
//         }
//     }
//
//
//
//     //this is where we are going to put your methods yay!
//
//     Increment = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
//
//     Decrement = () => {
//         this.setState({
//             count: this.state.count - 1
//         })
//     }
//
//     render() {
//         return (
//
//             <div className="Containner">
//                 <nav className"navbar">Counter</nav>
//                 <div className"counter">
//                   <h1>{this.state.count}</h1>
//                   <button className="button" onClick = {this.Increment}> Increment </button>
//                   <button className="button" onClick={this.Decrement}> Decrement </button>
//                 </div>
//             </div>
//         )
//     }
// }
//
// export default Test;


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
