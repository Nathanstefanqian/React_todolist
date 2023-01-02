import React, { Component } from 'react'

export default class Footer extends Component {
  handleCheckAll = (event) => {
    this.props.checkAlltodo(event.target.checked)
  }
  handleCleardone = () => {
    this.props.clearDonetodo()
  }
  render() {
    const { Todos } = this.props
    //已完成的个数
    const doneCount = Todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    //Todos.reduce((pre,todo)=> {return pre +(todo.done? 1:0)},0)
    //回调函数：把一个函数当做成是一个参数传到另一个函数里，当需要使用这个函数时 调用这个函数
    //箭头函数 当函数体只有一句内容时，往往可以省略 return 就像上面写的那样
    const total = Todos.length
    return (
      <div>
        <div className="todo-footer">
          <label>
            <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total ? true : false} />
          </label>
          <span>
            <span>已完成{doneCount}</span> / 全部{total}
          </span>
          <button className="btn btn-danger" onClick={this.handleCleardone}>清除已完成任务</button>
        </div>
      </div>
    )
    //在checkbox中如果，写defaultChecked，那么只有当第一次读取这个状态时进行判断，后面就不会再生效了
    //如果写入checked 那么这个属性是只读的，也就是只会遵从函数里的内容，无法手动修改内容了
    //因此在这里我们需要写一个onChange来进行修改
  }
}