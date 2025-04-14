import TodoList from "../components/TodoList";
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('TodoList', () => {
   test('renders input and button', () => {
      //Arrange
      const { asFragment, getByTestId } = render(<TodoList />);
      const button = getByTestId('add-btn');
      const input = getByTestId('todo-input')
      //Act
      // No action - only rendering

      //Assert
      expect(asFragment()).toMatchSnapshot();
      // expect(button).toBeInTheDocument();
      expect(button).toBeDefined();
      expect(input).toBeDefined();
      // expect(input).toBeInTheDocument();
   });

   test('adds new todo to the list when btn is pressed', () => {

      //Arrange
      const { getByTestId, getByText } = render(<TodoList />);
      const input = getByTestId('todo-input');
      const btn = getByTestId('add-btn');

      //Act
      fireEvent.change(input, { target: { value: 'Test todo' } });
      fireEvent.click(btn);

      //Assert
      expect(getByText('Test todo')).toBeInTheDocument();
   })

   //Integration test
   test('marks todo as completed and applies line-through when clicked', () => {

      //Arrange
      const { getByTestId, getByText } = render(<TodoList />)
      const input = getByTestId('todo-input');
      const btn = getByTestId('add-btn');

      //Act: add a todo
      fireEvent.change(input, { target: { value: 'Test todo' } })
      fireEvent.click(btn);

      //Get the text of newly added todo
      const todoText = getByText('Test todo');

      //Assert: its rendered properly
      expect(todoText).toBeInTheDocument();
      expect(todoText).not.toHaveStyle('text-decoration: line-through');

      //Act2: toggle the todo by clicking it
      fireEvent.click(todoText);

      //Assert it should now be marked completed with line-through
      expect(todoText).toHaveStyle('text-decoration: line-through');
   })

});