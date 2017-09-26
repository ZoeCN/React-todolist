'use strict';
let React = require('react');
let ReactDOM = require('react-dom');
import './css/index.scss';

// import components
import TodoList from './components/TodoList';
ReactDOM.render(
  <TodoList />,
  document.getElementById('todo-wrapper')
);
