import { Todo } from '../types/todo';

interface TodoItemProps {
   todo: Todo;
   toggleTodo: (todoId: number) => void;
   deleteTodo: (todoId: number) => void;
}

const TodoItem = ({ todo, toggleTodo, deleteTodo }: TodoItemProps) => {
   return (
      <div style={{ flex: 1, flexDirection: 'row', border: '2px' }}>
         <span
            data-testid={'todo-title'}
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}>
            {todo.title}
         </span>
         <button onClick={() => deleteTodo(todo.id)} data-testid='delete-btn'>Delete</button>
      </div>
   )
}

export default TodoItem;