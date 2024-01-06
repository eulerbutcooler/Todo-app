import { useState } from "react";

export function CreateTodo({setTodos}){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")

    const inputStyle = {
        padding: '10px',
        margin: '5px 0',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#555',
        color: '#fff',
        fontSize: '16px',
        width: '100%'
    };

    const buttonStyle = {
        padding: '10px 20px',
        margin: '10px 0',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#777',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
        width: '100%',
        transition: 'background-color 0.3s ease'
    };

    return (
        <div>
            <div style={{ marginBottom: '10px' }}>
                <input 
                    style={inputStyle} 
                    type="text" 
                    placeholder="title" 
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <input 
                    style={inputStyle} 
                    type="text" 
                    placeholder="description" 
                    onChange={e => setDescription(e.target.value)}
                />
            </div>
            <div>
            <button 
        style={buttonStyle} 
        onClick={() => {
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setTodos(todos => [...todos, data]);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }}
    >
        Add a todo
    </button>
            </div>
        </div>
    )};
