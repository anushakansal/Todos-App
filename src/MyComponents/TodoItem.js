import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        <div>
        <h4 style={{ color: 'white' }} className="my-2">{todo.title}</h4>
        <p style={{ color: 'grey' }}>{todo.desc}</p>
        <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
        <hr />
        </>
    )
}
