import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "49vh",
        margin: "40px auto"
    }
    return (
        <div className="class2" style={{ marginLeft: 300, marginRight: 300}}>
            <div className="container my-3" style={myStyle}>
                <h3 style={{ color: 'white' }} className="text-center my-3">T O D O S &nbsp; &nbsp; L I S T</h3>
                {props.todos.length === 0?"No Todos to display": 
                props.todos.map((todo) => {
                        return (
                            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                        )
                    })
                }
            </div >
        </div>

    )
}
