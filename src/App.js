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
}}/> First React Project | Copyright @ <a herf="http://mhjaofry.com"> MH Jafory </a></h1>
      </div>


    )
  }
}
export default Counter;
