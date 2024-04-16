import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./ToDoSlices/TodoSlice";


const store = configureStore({
    reducer:{
        todoReducer,
        
    },
});


export default store;