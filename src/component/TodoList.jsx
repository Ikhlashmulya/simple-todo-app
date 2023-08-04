import React from 'react';
import Todo from "./Todo";

export default function({isRefresh, setRefresh}) {

    const [todos, setTodos] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        if(isRefresh) {
            fetch("http://localhost:8080/api/todos")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                      `This is an HTTP error: The status is ${response.status}`
                    )
                  }
                return response.json()
            })
            .then((actual) => {
                setTodos(actual.data)
                setRefresh(false)
            })
            .catch((err) => {
                setRefresh(false)
                console.log(err.message)
            })
            .finally(() => setLoading(false))
        }
    }, [isRefresh, setRefresh])

    return (
        <div className='flex flex-col gap-3 w-96 ml-7'>
            {loading && (<div>loading...</div>)}
            {todos ? (todos.map((todo) => (
                <Todo key={todo.id} name={todo.name} id={todo.id} setRefresh={setRefresh}/>
            ))):(<div>Nothing to do</div>)} 
        </div>
    )
}