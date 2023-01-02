import React, { Component } from 'react'
import Item from "../Item/index"
import PropTypes from 'prop-types'

export default class List extends Component {
  //对接收的props进行：类型，必要性的限制
  static propTypes = {
    Todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }
  render() {
    const { Todos, updateTodo, deleteTodo } = this.props //这里的Todos代表在使用组件时传进来的数组
    return (
      <div>
        <ul className="todo-main">
          {
            Todos.map(todo => {
              return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />//这里指代的从app.jsx传过来的updatetodo
            })//todo 代表数组里的每一个项
          }
        </ul>
      </div>
    )
  }
}