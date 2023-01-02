import React, { Component } from 'react'
import Header from "./components/Header/index.jsx"
import Footer from "./components/Footer/index.jsx"
import List from "./components/List/index.jsx"

export default class App extends Component {

  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '打代码', done: false }
    ]
  }
  //addtodo用于添加一个todo，接受的参数是todo的一个对象
  addtodo = (todoObj) => {
    //获取原todos
    const { todos } = this.state
    //追加一个新的todos
    const newtodos = [todoObj, ...todos]//这里有一个细节，会放在最前方
    //更新状态
    this.setState({ todos: newtodos })

  }
  //updatetodo用于更新一个todo对象
  updatetodo = (id, done) => {
    //获取状态中的todos
    const { todos } = this.state
    //匹配并处理数据
    const newtodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done }//因为传过来的参数就叫做done，所以这里done：done可以简写为done
      else return todoObj
    })
    this.setState({ todos: newtodos })
  }

  //用于更新删除todos项目
  deleteTodo = (id) => {
    //获取原来的todos
    const { todos } = this.state;
    //删除指定id的todoObj
    const newtodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    //更新状态
    this.setState({ todos: newtodos })
  }

  checkAlltodo = (done) => {
    const { todos } = this.state
    const newtodos = todos.map((todoObj) => {
      return { ...todoObj, done }
    })
    this.setState({ todos: newtodos })
  }
  clearDonetodo = () => {
    const { todos } = this.state
    const newtodos = todos.filter((todoObj) => {
      return todoObj.done !== true
    })
    this.setState({ todos: newtodos })
  }


  render() {
    const { todos } = this.state
    return (
      <div className="App">
        <div className="todo-container">
          <div className="todo-wrap">
            <Header Addtodo={this.addtodo} />
            <List Todos={todos} updateTodo={this.updatetodo} deleteTodo={this.deleteTodo} />
            <Footer Todos={todos} checkAlltodo={this.checkAlltodo} clearDonetodo={this.clearDonetodo} />
          </div>
        </div>
      </div>
    )
  }
}


