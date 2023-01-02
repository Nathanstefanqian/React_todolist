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
    const { Todos, updateTodo, deleteTodo } = this.props //由父组件传过来的数组和函数
    return (
      <div>
        <ul className="todo-main">
          {
            Todos.map(todo => {
              return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
              //这里指代的从app.jsx传过来的updatetodo
            })//todo 代表数组里的每一个项 这里的key必须要写出来
          }
        </ul>
      </div>
    )
  }
}