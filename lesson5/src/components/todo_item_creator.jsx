import { useRecoilState } from 'recoil';
import { todoListState } from '../store';

import { useState } from 'react';

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useRecoilState(todoListState);

  function getId() {
    return (todoList.length === 0) ? 1 : Math.max(...todoList.map(todo => todo.id)) + 1;
  }
  

  function addItem() {
    setTodoList([...todoList, {id: getId(), text: inputValue, isCompleted: false}]);
  }
  

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <p>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={addItem}>Add</button>
    </p>
  );
}
