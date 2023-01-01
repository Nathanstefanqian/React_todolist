import React, { Component } from 'react'
import Item from "../Item/index"
export default class List extends Component {
  render() {
    const { Todos, updateTodo } = this.props //这里的Todos代表在使用组件时传进来的数组
    return (
      <div>
        <ul className="todo-main">
          {
            Todos.map(todo => {
              return <Item key={todo.id} {...todo} updateTodo={updateTodo} />//这里指代的从app.jsx传过来的updatetodo
            })//todo 代表数组里的每一个项
          }
        </ul>
      </div>
    )
  }
}