import { createSlice } from "@reduxjs/toolkit";

// define initial state 
const initialState = {
    todos: []
};


const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // add todos
        addTodo: (state, action) => { 
            state.todos.push(action.payload)
        },

        // remove todos
        removeTodo: (state, action) => { 
            state.todos = state.todos.filter((id) => id !== action.payload);
        },

        // update todos
        updateTodo: (state, action) => { 
            // find the todo index/id
            // update the todo based on index/id
        },

        // search todo
        findTodo: (state, action) => { 
            // find the todo based on title 
        },

        // markCompleted
        updateTodoStatus: (state, action) => { 
            // find the index of the todo
            // mark the status such as completed, incomlpeted etc
        }
    },
    extraReducers: (builder) => {
        // handle async middleware/ API call
    }
});


// export actions, reducer and selector function
export const {addTodo, removeTodo, updateTodo, updateTodoStatus, findTodo} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
export const todoSelector = (state) => state.todoReducer;