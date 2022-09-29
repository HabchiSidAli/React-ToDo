const ToDoList = ({toDos}) => {

    return ( 
        <div className="todo-list">
            {toDos.map((toDo) => (
                <div className="toDoPreview" key={toDo.id}>
                    <h2>{ toDo.title}</h2>
                    <p>{ toDo.body}</p>
                </div>
            ))}
        </div>
     );
}
 
export default ToDoList;