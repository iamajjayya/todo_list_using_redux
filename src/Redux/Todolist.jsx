import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "./TodoSlice";


const TodoList  = () => {
    const  todos = useSelector( (state) =>  state.todos);
    const dispatch = useDispatch();


    return (
        <>
            <ul>
                { todos.map((todo) => (
                    <li key={todo.id} style={ {  textDecoration : todo.completed ? "line-through" : "none"  }}>
                        <span onClick={ () => dispatch(toggleTodo(todo.id))}>
                            {todo.text}
                        </span>
                        <button onClick={ () => dispatch(deleteTodo(todo.id))}>Delete todo</button>
                    </li>
                ))}
            </ul>
        </>
    )


}

export default TodoList;