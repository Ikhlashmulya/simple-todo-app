export default function Todo({id, name, setRefresh}) {

    function deleteTodo(id) {
        fetch(`http://localhost:8080/api/todos/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            alert(`Delete todo success`)
            setRefresh(true)
        })
        .catch((err) => console.log(err.message))
    }

    return (
        <div className='w-full h-12 flex justify-center items-center font-bold'>
            {name}
            <button className="text-red-600 hover:text-red-800 focus:outline-none bg-red-100 hover:bg-red-200 rounded-full w-6 h-6 flex items-center justify-center ms-auto" onClick={() => deleteTodo(id)}>
                <span className="font-bold text-xs">X</span>
            </button>
        </div>
    )
}