import React, { Component } from 'react'

export default class Item extends Component {
    state = { mouse: false }//鼠标移入移出
    //鼠标移入移出的回调
    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }
    //取消勾选某一个todo的回调
    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }

    handleDelete = (id) => {
        if (window.confirm('确认删除吗？')) {//这里需要加上window，因为confirm是一个关键字
            this.props.deleteTodo(id)
        }
    }

    render() {
        const { id, name, done } = this.props
        const { mouse } = this.state
        return (
            <div>
                <li style={{ backgroundColor: mouse ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                    <label>
                        <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                        <span>{name}</span>
                    </label>
                    <button className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }} onClick={() => this.handleDelete(id)}>删除</button>
                    <button className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }} onClick={this.handleDelete(id)}>删除</button>
                </li>
            </div >
            //defaultChecked 可以让复选框变得可以选择，不是只读 但是缺点是只会更新第一次加载时的状态
            //Onclick里面是不用高阶的回调函数写法
        )
    }
}