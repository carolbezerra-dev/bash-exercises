import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputTodo from './InputTodo';
// import Item from './Item';

class App extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     listTodo: [],
  //   };

  //   this.addTodo = this.addTodo.bind(this);
  // }

  // addTodo(todo) {
  //   this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  // }

  render() {
    const { addTodo } = this.props;
    return (
      <div className="App">
        <InputTodo />
        {<ul>
          {
          addTodo.map((todo, index) => (
            <li key={index + 1}>
              {todo}
            </li>
          ))
          }
        </ul>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  addTodo: state.reducerToDo,
});

export default connect(mapStateToProps)(App);
