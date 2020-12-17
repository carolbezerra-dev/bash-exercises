import React from 'react';
import './styles.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0
    }
    this.testingFunction = this.testingFunction.bind(this);
  }

  clickHere = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

testingFunction() {
  console.log("3 ways to use a button")
}

  render() {
    return (
      <div>
        <button onClick={this.clickHere} className={this.state.numeroDeCliques % 2 === 0 ? 'green' : ''}>
          {this.state.numeroDeCliques}
        </button>
        <button onClick={() => console.log("I am here")}>hello</button>
        <button onClick={this.testingFunction}>hi</button>
      </div>
    )
  }
};


export default App;
