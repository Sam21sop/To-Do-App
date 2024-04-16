import React from 'react'

const TodoList = (props) => {

    const { todos } = props;

    return (
        <>
            <div className={` flex mt-12 w-[60%] ml-[20%] justify-center`}>
                {
                    todos.length <= 0 ? 
                    <div className='m-4 text-3xl text-center text-lime-500'> No Todos Found</div> :

                    <table>
                        <thead className='text-3xl bg-gray-300 text-black border-2 border-blue-200 p-4'>
                            <tr className=''>
                                <td>Sr.No</td>
                                <td>Todo Name</td>
                                <td>Todo Status</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody className='bg-blue-100 text-black'>
                            {
                                todos.map((todo, index) => (
                                    <tr key={index}>
                                        <td>{todo.id}</td>
                                        <td>{todo.title}</td>
                                        <td>{todo.completed ? "completed" : ""}</td>
                                        <td>
                                            <button>Update</button>
                                            <button>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                }
            </div>

        </>
    )
}

export default TodoList