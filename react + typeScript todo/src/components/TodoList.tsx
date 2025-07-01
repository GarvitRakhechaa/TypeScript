// import React from 'react'

import { Delete } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle } from "./ui/card";


type TodoListProps = {
    items: {id:string, text: string}[];
    onRemoveTodo: (todoId: string) => void;
}

// const TodoList: React.FC<TodoListProps> = (props) => {
const TodoList = ({items, onRemoveTodo}: TodoListProps) => {
// const TodoList = (props: TodoListProps) => {
  return (
    <div className="grid md:grid-cols-5 gap-3 my-5">
        {items.map((todo) => (
        // {props.items.map((todo) => (
            <Card key={todo.id}>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>{todo.text}</CardTitle>
                    <Button onClick={()=> onRemoveTodo(todo.id)} className="h-6 w-6" variant={"destructive"} size={"icon"}>
                    {/* <Button onClick={()=> props.onRemoveTodo(todo.id)} className="h-6 w-6" variant={"destructive"} size={"icon"}> */}
                        <Delete/>
                    </Button>
                </CardHeader>
            </Card>
        ))}
    </div>
  )
}

export default TodoList