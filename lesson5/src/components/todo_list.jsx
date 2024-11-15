import { useRecoilValue } from 'recoil';
import { todoListFilteredState } from '../store';

import TodoItem from "./todo_item";
import TodoItemCreator from './todo_item_creator';
import TodoListFilters from './todo_list_filters';


export default function TodoList() {
  const todoList = useRecoilValue(todoListFilteredState);

  return (
    <>
      <TodoListFilters />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}