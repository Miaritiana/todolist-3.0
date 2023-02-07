import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Kanban from '../src/components/Kanban';

describe('test Kanban component', () => {
  it('renders the component', () => {
    const { getById } = render(<Kanban />);
    const kanbanElement = getById('kanban');
    expect(kanbanElement).toBeInTheDocument();
  });

  it('adds a new TODO item when pressing Enter', () => {
    const { getByPlaceholderText, getByText } = render(<Kanban />);
    const input = getByPlaceholderText('TODO');
    fireEvent.change(input, { target: { value: 'Task one' } });
    fireEvent.keyPress(input, { key: 'Enter'});
    const todoItem = getByText('Task one');
    expect(todoItem).toBeInTheDocument();
  });

  it('moves TODO item to the DONE list', () => {
    const { getByPlaceholderText, getByText } = render(<Kanban />);
    const input = getByPlaceholderText('TODO');
    fireEvent.change(input, { target: { value: 'Task Two' } });
    fireEvent.keyPress(input, { key: 'Enter'});
    const todoItem = getByText('Task Two');
    expect(todoItem).toBeInTheDocument();
    fireEvent.click(todoItem);
    const doneItem = getByText('Task Two');
    expect(doneItem).toBeInTheDocument();
  });
});
