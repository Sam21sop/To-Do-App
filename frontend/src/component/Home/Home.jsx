import React, { useEffect, useState } from 'react';
import AddTodoForm from '../AddTodoForm/AddTodoForm';
import TodoList from '../TodoList/TodoList';
import axios from 'axios';



const Home = () => {

    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            setTodos(response.data);
        } catch (error) {
            throw error;
        };
    };

    useEffect(() => {
        fetchTodos();
    }, [])


    return (
        <>
            <div className='flex justify-center text-center m-4'>
                <h2 className='text-3xl font-bold'>Todo List</h2>
            </div>

            {/* <AddTodoForm todos={todos}  setTodos={setTodos}/> */}
            
            <TodoList todos={todos} />
        </>
    )
}

export default Home