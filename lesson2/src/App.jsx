import './App.css';

import { students } from './data';
import { ListMap } from './components/lists';
import Counter from './components/counter';
import LightningCounter from './components/lightning_counter';
import ControlledComponent from './components/controlled_component';
import Form from './components/form';
import Accordion from './components/accordion';


function App() {
  return (
    <div>
      <Accordion/>
      <br/>
      <Form/>
      <br/>
      <ControlledComponent/>
      <br/>
      <LightningCounter/>
      <br/>
      <Counter/>
      <br/>
      <ListMap students={students} />
    </div>
);
}

export default App;
