import './App.css';
import { RecoilRoot } from 'recoil';

import TodoList from './components/todo_list';

function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
