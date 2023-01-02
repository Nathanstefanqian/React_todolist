import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'

export default class Header extends Component {
    //对接收的props进行：类型，必要性的限制
    static propTypes = {
        Addtodo: PropTypes.func.isRequired
    }
    handleKeyUp = (event) => {
        const { target, keyCode } = event //js的解构赋值
        if (keyCode !== 13) return //不是按下的回车 则不做任何操作
        if (target.value.trim() === '') {
            alert('输入不能为空')
            return
        }
        //准备好一个todo对象
        const todoObj = { id: nanoid(), name: target.value, done: false }
        //将todoObj传递给App
        this.props.Addtodo(todoObj)
    }
    render() {

        return (
            <div>
                <div className="todo-header">
                    <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
                </div>
            </div >
        )

    }

}

