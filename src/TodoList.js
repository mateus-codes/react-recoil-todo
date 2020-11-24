import './App.css';
//import { useRecoilValue } from 'recoil';
import { useAtom } from 'jotai'
import todoListState from "./TodoListState";
import TodoItem from "./TodoItem";
import TodoItemCreator from './TodoItemCreator'

function TodoList() {
    //const todoList = useRecoilValue(todoListState);
    const [todoList] = useAtom(todoListState)

    return (
        <div className='App'>
            {/* <TodoListStats /> */}
            {/* <TodoListFilters /> */}
            <TodoItemCreator />

            {todoList.map((todoItem) => (
                <TodoItem key={todoItem.id} item={todoItem} />
            ))}
        </div>
    );
}
export default TodoList