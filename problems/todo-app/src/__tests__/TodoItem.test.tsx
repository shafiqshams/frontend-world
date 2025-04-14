import { fireEvent, render } from "@testing-library/react"
import TodoItem from "../components/TodoItem"
import { Todo } from "../types/todo"
import '@testing-library/jest-dom';

describe('TodoItem', () => {

   const mockTodo: Todo = {
      id: 1,
      title: 'Unit test todo',
      completed: false
   };

   const toggleMock = jest.fn();
   const deleteMock = jest.fn();

   test('displays todo item when there is a todo', () => {

      //Arrange
      const { asFragment, getByText } = render(<TodoItem
         todo={mockTodo}
         toggleTodo={toggleMock}
         deleteTodo={deleteMock}
      />)

      //Assert
      expect(asFragment).toMatchSnapshot();
      expect(getByText('Unit test todo')).toBeInTheDocument();
   })

   test('calls toggleTodo when the text is clicked', () => {
      const { getByText } = render(<TodoItem todo={mockTodo} toggleTodo={toggleMock} deleteTodo={deleteMock} />);
      const todoText = getByText('Unit test todo');
      fireEvent.click(todoText);
      expect(toggleMock).toHaveBeenCalledWith(mockTodo.id);
   });

   test('calls deleteTodo when the delete button is clicked', () => {
      //Arrange
      const { getByTestId } = render(<TodoItem todo={mockTodo} toggleTodo={toggleMock} deleteTodo={deleteMock} />);
      const deleteButton = getByTestId('delete-btn');

      //Act
      fireEvent.click(deleteButton);

      //Assert
      expect(deleteMock).toHaveBeenCalledWith(mockTodo.id);
   });

   test('applies line-through style when todo is completed ', () => {
      //Arrange
      const { getByText } = render(<TodoItem todo={{ ...mockTodo, completed: true }} toggleTodo={toggleMock} deleteTodo={deleteMock} />);
      const todoText = getByText('Unit test todo');

      //No Action

      //Assert
      expect(todoText).toHaveStyle('text-decoration: line-through');
   });

   test('apply line-through style when todo is pressed', () => {
      //Arrange
      const { getByText, rerender } = render(<TodoItem todo={mockTodo} toggleTodo={toggleMock} deleteTodo={deleteMock} />);
      const todoText = getByText('Unit test todo');

      //Act
      fireEvent.click(todoText);


      //Assert
      expect(toggleMock).toHaveBeenCalledWith(mockTodo.id);
      // Simulate parent re-rendering the component with completed: true
      rerender(
         <TodoItem
            todo={{ ...mockTodo, completed: true }}
            toggleTodo={toggleMock}
            deleteTodo={deleteMock}
         />
      );
      expect(todoText).toHaveStyle('text-decoration: line-through');
   });
})