import "./TodoItem.css";

const TodoItem = ({ id, title, body, handleDelete, handleStatus, done }) => {
  return (
    <div className="to-do-preview">
      <h2>
        {done ? "DONE" : "TODO"}: {title}
      </h2>
      <p>{body}</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
      <button onClick={() => handleStatus(id)}>
        {done ? "TODO" : "DONE"}:
      </button>
    </div>
  );
};

export default TodoItem;
