import React, { useState, useEffect, useRef } from 'react'

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit  ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() =>{
        inputRef.current.focus()
    })

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(input);
        setInput("")

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
        })
        setInput("")
       
    }

    const handleChange = (event) =>{
       setInput(event.target.value)
    }
    
  return (
    <form  className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? (
            <>
            <input type="text" placeholder='Add a todo' id="" value={input} className="todo-input" onChange={handleChange} ref={inputRef} 
            />
            <button className="todo-button edit">Update Todo</button>
            </>
        ) : (
            <>
            <input type="text" placeholder='Add a todo' id="" value={input} className="todo-input" onChange={handleChange} ref={inputRef} />
        <button className="todo-button">Add Todo</button>
        </>
        )}
        
    </form>
  )
}

export default TodoForm;