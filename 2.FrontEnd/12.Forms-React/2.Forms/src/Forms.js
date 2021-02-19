import React, { Component } from 'react';

class Forms extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
    }
    this.saveTheName = this.saveTheName.bind(this)
  }
  
  saveTheName(event) {
    this.setState({
      name: event.target.value,
    })
    console.log(event.target.value)
  }

  render() {
    return (
      <div>
        <form>
          <select>
            <option>Rain</option>
            <option>Sun</option>
            <option>Cloud</option>
          </select><br />
          <label> What is your age?
            <input type="number" />
          </label><br />
          <label> What is your name?
            <input 
              type="text"
              value={this.state.name}
              onChange={this.saveTheName}
            />
          </label><br />
          <label> Tell me about you
            <textarea />
          </label>
        </form>

      </div>
    )
  }
}

export default Forms;

