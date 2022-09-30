import "./ToDoList.css";

const ToDoList = ({ toDos, handleDelete }) => {
  return (
    <div className="todo-list">
      {toDos.map((toDo) => (
        <div className="toDoPreview" key={toDo.id}>
          <h2>{toDo.title}</h2>
          <p>{toDo.body}</p>
          <button onClick={() => handleDelete(toDo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
