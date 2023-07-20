import React, { useState } from "react";
import { Button, Input, Divider, message, Popconfirm } from "antd";

import { useSelector, useDispatch } from "react-redux"
import { add, edit, remove, finish } from '@/store/modules/todo'

import { CheckOutlined, DeleteOutlined, UndoOutlined } from '@ant-design/icons'
import './TodoList.scss'


export default function TodoList() {
    let [inputTodo, setInputTodo] = useState('')
    let [currentItemId, setCurrentItemId] = useState('')
    const todoList = useSelector(state => state.todo.todoList)
    let dispatch = useDispatch()

    // 删除操作
    const handleRemove = id => {
        setCurrentItemId(id)
    }
    // 确认删除
    const confirmRemove = (e) => {
        dispatch(remove(currentItemId))
        message.success('删除成功！');
    };

    // 切换完成/恢复
    const handleToggleState = item => {
        dispatch(finish(item.id))
    }

    // 点击文字进入编辑状态
    const handleEdit = item => {
        setCurrentItemId(item.id)
        setInputTodo(item.content)
    }

    // input框中按下enter键后，如果有currentItemId，说明是修改操作；否则就是新增
    const handleInputEnter = () => {
        console.log(currentItemId);
        if (currentItemId) {
            dispatch(edit({ id: currentItemId, content: inputTodo }))
        } else {
            dispatch(add(inputTodo))
        }
        setInputTodo('')
    }
    return (
        <div className="todo__container">
            <div className="input">
                <Input
                    placeholder="Enter"
                    type="text"
                    allowClear
                    value={inputTodo}
                    onChange={e => {
                        setInputTodo(e.target.value)
                    }}
                    onPressEnter={handleInputEnter}
                />
            </div>
            <div className="list">
                {
                    todoList.length > 0 && todoList.map(item => {
                        return (
                            <React.Fragment key={item.id}>
                                <div key={item.id} className="todo__item" style={{ textDecoration: item.done ? 'line-through' : '' }}>
                                    <span className="dot"></span>
                                    <span className="content" onClick={() => handleEdit(item)}>{item.content}</span>
                                    <div className="button">
                                        <Button type="text" icon={item.done ? <UndoOutlined /> : <CheckOutlined />} onClick={() => handleToggleState(item)}>{item.done ? '恢复' : '完成'}</Button>
                                        <Popconfirm
                                            title="Delete the task"
                                            description="Are you sure to delete this task?"
                                            onConfirm={confirmRemove}
                                            okText="Yes"
                                            cancelText="No"
                                        >
                                            <Button type="text" icon={<DeleteOutlined />} onClick={() => handleRemove(item.id)}>删除</Button>
                                        </Popconfirm>
                                    </div>
                                </div>
                                <Divider dashed />
                            </React.Fragment>

                        )
                    })
                }
            </div>
            <div className="footer">
                <span>共 {todoList.length}条待办</span>
            </div>
        </div>
    )
}