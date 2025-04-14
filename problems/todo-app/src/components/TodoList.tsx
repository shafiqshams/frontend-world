import { useState } from 'react'
import { Todo } from '../types/todo';
import TodoItem from './TodoItem';


const TodoList = () => {

   const [todos, setTodos] = useState<Todo[]>([]);
   const [input, setInput] = useState<string>('');


   const handleAddTodo = () => {
      if (!input.trim()) return;

      const newTodo: Todo = {
         id: Date.now(),
         title: input,
         completed: false
      }

      setTodos([...todos, newTodo]);
      setInput('');
   }

   const handleToggleTodo = (todoId: number) => {
      const updatedTodos: Todo[] = todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)
      setTodos(updatedTodos)
   }

   const handleDeleteTodo = (todoId: number) => {
      const updatedTodos: Todo[] = todos.filter(todo => todo.id !== todoId);
      setTodos(updatedTodos);
   }

   return (
      <>
         <div>Todo App</div>

         <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Write here...'
            type='text'
            data-testid='todo-input'
         />

         <button
            data-testid='add-btn'
            onClick={handleAddTodo}>Add todo</button>

         {todos.map((todo) =>
            <TodoItem
               key={todo.id}
               todo={todo}
               deleteTodo={handleDeleteTodo}
               toggleTodo={handleToggleTodo}
            />
         )}
      </>
   )
}

export default TodoList