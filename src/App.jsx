
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"
import { TodoProvider } from "./contexts"
import { useState } from "react"

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

    
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }
  

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="w-full h-screen bg-[#172842] flex flex-col items-center">
      <h1 className=" text-2xl font-bold text-center mb-8 mt-10 text-white">Manage Your Todos</h1>
        <div className="w-2/5 ">
        <TodoForm  />
        <div className="mt-4">
          {
            todos.map((todo)=>(
                <TodoItem key={todo.id} todo={todo} />
            ))
          }
        </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
