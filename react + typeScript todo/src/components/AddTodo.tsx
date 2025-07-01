import React, { useState, type ChangeEvent, type FormEvent } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

type AddTodoProps = {
  onAddTodo: (TodoText: string) => void
}

const AddTodo = ({onAddTodo}: AddTodoProps) => {
  const [text, setText] = useState<string>("")

  const changeEventHandler = (event : ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }
  const submitHandler = (event : FormEvent) => {
    event.preventDefault();
    onAddTodo(text)
    setText("")
  }
  return (
    <form onSubmit={submitHandler} className="flex items-center gap-5">
        <Input
        onChange={changeEventHandler}
        value={text}
        type="text"
        placeholder="Write a new todo..."
        className="w-fit"
      />

        <Button type="submit">Add Todo</Button>
    </form>
  )
}

export default AddTodo
