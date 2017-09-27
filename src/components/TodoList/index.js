'use strict';
let React = require('react');
import '../../css/todoItem.scss';
/**
 * Jsdoc
 * @param {list} value An todo list that you want to delete
 * @return {Elements}
 */

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        'read',
        'code',
        'game',
        'tv',
      ],
    };
  }
  render() {
    let todos = this.state.todos;
    let todoLists = todos.map((item, index) => {
      return (
        <li className="todo-item" key={index}>
          <span className="item-name">{item}</span>
          <span className="item-delete"
            onClick={()=>this.deleteList(item)}> x </span>
        </li>
      );
    });
    return (
      <div id="todo-list">
        <p>something you need to do</p>
        <ul>{todoLists}</ul>
      </div>
    );
  }
  deleteList(value) {
    let updatedTodos = this.state.todos.filter((item, index) => {
      return item !== value;
    });
    this.setState({
      todos: updatedTodos,
    });
  }
}

export default TodoList;
