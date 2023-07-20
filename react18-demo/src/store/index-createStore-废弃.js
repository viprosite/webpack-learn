import {createStore} from 'redux'

const initialState = {
    todoList:[],
}

function reducer(state=initialState, action){
    switch(action.type){
        case 'ADD':
            state.todoList.push(action.payload);
            return state;
        case 'EDIT':
            for (let item of state.todoList){
                if(item.id == action.payload.id){
                    item.content = payload.content
                    break
                }
            }
            return state;
        case 'DEL':
            state.todoList.splice(state.todoList.findIndex(val=>val.id == action.payload.id), 1)
            return state;
    }
}

const store=  createStore(reducer)