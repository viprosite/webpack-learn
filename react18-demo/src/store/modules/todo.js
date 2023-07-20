import { createSlice } from "@reduxjs/toolkit";
import localforage from 'localforage'

localforage.config({
    driver: localforage.INDEXEDDB,
    name: 'TodoList'
});

let historyTodo = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : []
// (async function () {
//     historyTodo = await localforage.getItem('todo')
//     console.log(historyTodo);
// })()
function save(data) {
    localStorage.setItem('todo', data)
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todoList: historyTodo,
    },
    reducers: {
        add(state, action) {
            state.todoList.unshift({
                id: state.todoList.length + 1,
                content: action.payload,
                done: false
            });
            save(JSON.stringify(state.todoList))
        },
        edit(state, action) {
            for (let item of state.todoList) {
                if (item.id == action.payload.id) {
                    item.content = action.payload.content
                    break
                }
            }
            save(JSON.stringify(state.todoList))
        },
        remove(state, action) {
            state.todoList.splice(state.todoList.findIndex(val => val.id == action.payload), 1)
            save(JSON.stringify(state.todoList))
        },
        finish(state, action) {
            console.log(action);
            for (let item of state.todoList) {
                if (item.id == action.payload) {
                    item.done = !item.done
                    break
                }
            }
            save(JSON.stringify(state.todoList))
        }
    }
})

export const { add, edit, remove, finish } = todoSlice.actions
export default todoSlice.reducer

/**
console.log(todoSlice);
actions:{ add: ƒ, edit: ƒ, remove: ƒ }
caseReducers:{ add: ƒ, edit: ƒ, remove: ƒ }
getInitialState:ƒ()
name:"todo"
reducer:ƒ(state, action)
 */


