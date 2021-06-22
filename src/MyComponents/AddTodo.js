import React from 'react'
import { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title and Description are mandatory.");
            return
        }
        else{
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className="class1" style={{ marginLeft: 300, marginRight: 300}}>
            <div className="container my-3">
                <h4 style={{ color: 'yellow' }} className="text-center container">A D D  &nbsp; &nbsp; A  &nbsp; &nbsp; T O D O</h4>
                <form style={{ color: 'yellow' }} onSubmit={submit}>
                    <input type="hidden" value="something" />
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Add Title</label>
                        <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Add Description</label>
                        <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                    </div>
                    <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
                </form>
            </div>
        </div>

    )
}
