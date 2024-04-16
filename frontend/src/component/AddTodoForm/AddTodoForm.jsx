import React, { useRef } from 'react';


const style = `
    flex 
    justify-center 
    text-center 
    m-4
`

const AddTodoForm = (props) => {

    const { todos, setTodos } = props;

    const todoInputRef = useRef();

    const todoInputHandler = () => {
        setTodos([{title: todoInputRef.current.value}, ...todos]);
    };
    

    return (
        <>
            <div className={`${style}`}>
                    <input 
                        type="text" 
                        placeholder='Enter your todo' 
                        className='p-2 rounded-sm border text-xl text-black'
                        ref={todoInputRef}
                        
                    />
                    <button 
                        type='button' 
                        className='bg-green-300 p-4 rounded-sm text-xl border-solid border'
                        onClick={todoInputHandler}
                    >
                        Add
                    </button>
                </div>
        </>
    )
}

export default AddTodoForm;