import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { addTask } from './actions';

class InputTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textTodo: '',
    };

    this.changeTextTodo = this.changeTextTodo.bind(this);
  }

  changeTextTodo(value) {
    this.setState({ textTodo: value })
  }

  // addItem(value, callback) {
  //   this.setState({ textTodo: '' })
  //   callback(value);
  // }

  render() {
    const { listTodo } = this.props;
    const { textTodo } = this.state;
    return (
      <div className="InputTodo">
        <label htmlFor="inputTodo">Tarefa:</label>
        <input
          id="inputTodo"
          type="text"
          value={textTodo}
          onChange={(e) => this.changeTextTodo(e.target.value)}
        />
        <input id="btnAdd" type="button" value="Adicionar" onClick={() => listTodo(textTodo)} />
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   addTodo: state.reducerToDo,
// });

const mapDispatchToProps = (dispatch) => ({
  listTodo: (task) => dispatch(addTask(task))
});

export default connect(null, mapDispatchToProps)(InputTodo);

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}
