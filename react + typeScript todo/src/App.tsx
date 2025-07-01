import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import type { Todo } from './types/todo'
function App() {
  const [todos, setTodos] = useState<Todo[]>([]) // useState me  todo type ke member array me jayenge

  const addTodoHandler = (text: string) => { // yha text accept ho rha hai jo description type hai 
    const id = Math.random().toString(); //yha unique id generate ho rrhi hai string format me
    setTodos([...todos, {id , text}]) // yha saare toto ke sath new todo bhi add ho rha hai
  } 


  const removeTodoHandler = (todoId:string) => {  //yha todo id accept kar rhe hai
    const newTodo = todos.filter((todo:Todo) => {
      return todo.id !== todoId; // yha wo todos filter ho rhe hai jo id se mathc nhi hote hai 
    })
    setTodos(newTodo) // baki bache hue todo wapas set kar rhe hai
  }

  return (
    <main className='max-w-6xl mx-auto my-10 px-5 md:px-0'>
      <AddTodo onAddTodo={addTodoHandler}/>
      <TodoList items = {todos} onRemoveTodo = {removeTodoHandler} />
    </main>
  )
}

export default App
