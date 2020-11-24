import './App.css';
//import { RecoilRoot } from 'recoil';
import { Provider } from 'jotai'
import TodoList from './TodoList'

function App() {
  return (
    //<RecoilRoot>
    <Provider>
      <TodoList />
    </Provider>
    //</RecoilRoot>
  );
}

export default App;
