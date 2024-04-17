// src/components/TodoList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTodoForm from '../AddTodoForm/AddTodoForm';

const buttonStyle = `

`;


const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleUpdateTodo = async (id, updatedTodo) => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, updatedTodo);
      setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  return (
    <>
        <AddTodoForm onAdd={handleAddTodo} />
        <div className="flex justify-center relative">
            {/* <ul className='absolut mt-10'>
                {todos.map(todo => (
                <li key={todo.id}>
                    {todo.title}
                    <button onClick={() => handleDeleteTodo(todo.id)} className='font-bolt bg-red-400 p-1 m-1 rounded-md hover:bg-red-200 hover:text-black'>Delete</button>
                    <button onClick={() => handleUpdateTodo(todo.id)} className='bg-yellow-300 p-1 m-1 rounded-md'>Update</button>
                    
                </li>
                ))}
            </ul> */}
            {
                todos.length <= 0 ? 

                <div className='m-4 text-3xl text-center text-lime-500'> No Todos Found</div> :

                <table>
                    <thead className='text-3xl bg-gray-300 text-black border-blue-200 rounded'>
                        <tr className=''>
                            <td className='p-2 m-2'>Sr.No</td>
                            <td>Todo Name</td>
                            <td>Todo Status</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody className='justify-center'>
                        {
                            todos.map((todo, index) => (
                                <tr key={index}>
                                    <td>{todo.id}</td>
                                    <td>{todo.title}</td>
                                    <td>{todo.completed ? "completed" : ""}</td>
                                    <td>
                                        <button onClick={() => handleDeleteTodo(todo.id)} className='font-bolt bg-red-400 p-1 m-1 rounded-md hover:bg-red-200 hover:text-black'>Delete</button>
                                        <button onClick={() => handleUpdateTodo(todo.id)} className='bg-yellow-400 p-1 m-1 rounded-md hover:bg-yellow-200 hover:text-black'>Update</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            }
        </div>
    </>
  );
};

export default TodoList;







// import React from 'react'

// const TodoList = (props) => {

//     const { todos } = props;

//     return (
//         <>
//             <div className={` flex mt-12 w-[60%] ml-[20%] justify-center`}>
//                 {
//                     todos.length <= 0 ? 
//                     <div className='m-4 text-3xl text-center text-lime-500'> No Todos Found</div> :

//                     <table>
//                         <thead className='text-3xl bg-gray-300 text-black border-2 border-blue-200 p-4'>
//                             <tr className=''>
//                                 <td>Sr.No</td>
//                                 <td>Todo Name</td>
//                                 <td>Todo Status</td>
//                                 <td>Actions</td>
//                             </tr>
//                         </thead>
//                         <tbody className='bg-blue-100 text-black'>
//                             {
//                                 todos.map((todo, index) => (
//                                     <tr key={index}>
//                                         <td>{todo.id}</td>
//                                         <td>{todo.title}</td>
//                                         <td>{todo.completed ? "completed" : ""}</td>
//                                         <td>
//                                             <button>Update</button>
//                                             <button>Delete</button>
//                                         </td>
//                                     </tr>
//                                 ))
//                             }
//                         </tbody>
//                     </table>
//                 }
//             </div>

//         </>
//     )
// }

// export default TodoList