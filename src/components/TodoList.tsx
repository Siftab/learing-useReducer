import React, { FormEvent } from 'react';

const TodoList = () => {


    const handleSubmit = (e:FormEvent)=>{
        e.preventDefault()
        console.log(e.target)
    }
    return (
        <div>
            <h1 className='text-3xl'>this is main TODO</h1>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <label htmlFor="Task">Task</label>
                <input type="text" name='Task' placeholder='Task'  className='border border-green-500 m-2 p-1'/>
            
                <button type='submit' className='p-2 bg-red-600'> submit</button>
            </form>
        </div>
    );
};

export default TodoList;