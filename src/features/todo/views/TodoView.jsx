import { useState } from "react"

const TodoView = ({ loggedInUser }) => {
    const [todos, settodos] = useState([])
    const [taskName, settaskName] = useState('')

    const onAddTodo = () => {
        let oldTodos = [...todos]
        let id = oldTodos.length + 1
        let obj = {
            id: id,
            name: taskName,
            createdBy: loggedInUser
        }
        oldTodos.push(obj)
        settodos(oldTodos)
        settaskName('')
    }

    return (
        <div>
            <h1>Todo List {loggedInUser}</h1>
            <div>
                <input value={taskName} onChange={(e) => settaskName(e.target.value)} type="text" placeholder='New Task' />
                <button onClick={onAddTodo}>Add Task</button>
            </div>
            <div>
                <ul>
                    {
                        todos.map((todo) => (
                            <li key={todo.id}>{todo.name} (created by {todo.createdBy}) <button>Delete</button></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export { TodoView }