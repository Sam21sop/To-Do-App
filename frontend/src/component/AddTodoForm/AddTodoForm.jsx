
// src/components/AddTodoForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddTodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      });
      onAdd(response.data);
      setTitle('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <div className='flex justify-center'>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className='text-xl rounded px-2 py-1 text-black'
                placeholder="Enter todo title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit" className='text-xl bg-green-400 rounded p-1 m-1'>Add Todo</button>
        </form>
    </div>
  );
};

export default AddTodoForm;





// import React, { useRef } from 'react';


// const style = `
//     flex 
//     justify-center 
//     text-center 
//     m-4
// `

// const AddTodoForm = (props) => {

//     const { todos, setTodos } = props;

//     const todoInputRef = useRef();

//     const todoInputHandler = () => {
//         setTodos([{title: todoInputRef.current.value}, ...todos]);
//     };
    

//     return (
//         <>
//             <div className={`${style}`}>
//                     <input 
//                         type="text" 
//                         placeholder='Enter your todo' 
//                         className='p-2 rounded-sm border text-xl text-black'
//                         ref={todoInputRef}
                        
//                     />
//                     <button 
//                         type='button' 
//                         className='bg-green-300 p-4 rounded-sm text-xl border-solid border'
//                         onClick={todoInputHandler}
//                     >
//                         Add
//                     </button>
//                 </div>
//         </>
//     )
// }

// export default AddTodoForm;