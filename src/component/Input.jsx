import React from "react"

export default function Input({setRefresh}) {

    const [name, setName] = React.useState("")

    function addTodo(value) {
        fetch("http://localhost:8080/api/todos", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: value})
        })
        .then(() => {
            alert(`New todo added ${name}`)
            setName("")
            setRefresh(true)
        })
        .catch((err) => console.log(err.message))
    }

    return (
        <div className="join p-5">
            <input 
                className="input input-bordered join-item w-80" 
                placeholder="Input Todo"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button 
                className="btn join-item ml-3"
                onClick={() => addTodo(name)}
            >
                Add
            </button>
        </div>
    )
}