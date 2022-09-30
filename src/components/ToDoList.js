import { useRef, useState } from "react";
import TodoItem from "./TodoItem";
//css
import "./ToDoList.css";

const INITIAL_STATE = [
  {
    title: "Study React",
    body: "Lorem Ipsum...",
    description: "Lorem Ipsum...",
    done: false,
    id: 1,
  },
  {
    title: "Test React",
    body: "Lorem Ipsum...",
    description: "Lorem Ipsum...",
    done: false,
    id: 2,
  },
  {
    title: "Play Games",
    body: "Lorem Ipsum...",
    description: "Lorem Ipsum...",
    done: true,
    id: 3,
  },
];

const ToDoList = () => {
  const [toDos, setToDo] = useState(INITIAL_STATE);

  const formAddTodo = useRef();
  const buttonAddNewTask = useRef();
  const title = useRef();
  const body = useRef();
  const description = useRef();

  const handleDelete = (id) => {
    const newToDos = toDos.filter((toDo) => toDo.id !== id);
    setToDo(newToDos);
  };

  const handleStatus = (id) => {
    const newToDos = toDos.map((toDo) => {
      if (toDo.id === id) {
        toDo = { ...toDo, done: !toDo.done };
      }
      return toDo;
    });
    setToDo(newToDos);
  };

  const ToggleVisionFormAddTodo = (b) => {
    if (b === false) {
      formAddTodo.current.className = "form-add-todo-display-none";
      return;
    }
    formAddTodo.current.className = "form-add-todo";
  };

  const ToggleVisionAddTaskButton = (b) => {
    if (b === false) {
      buttonAddNewTask.current.className = "add-task-button-display-none";
      return;
    }
    buttonAddNewTask.current.className = "add-task-button-display";
  };

  const handleOnAddNewTaskClick = () => {
    ToggleVisionFormAddTodo(true);
    ToggleVisionAddTaskButton(false);
  };

  const resetFormValues = () => {
    title.current.value = "";
    body.current.value = "";
    description.current.value = "";
  };

  const handleOnConfirmClick = () => {
    const toAdd = {
      id: toDos.length > 0 ? toDos[toDos.length - 1].id + 1 : 0,
      title: title.current.value,
      body: body.current.value,
      description: description.current.value,
      done: false,
    };

    setToDo([...toDos, toAdd]);

    resetFormValues();

    ToggleVisionFormAddTodo(false);
    ToggleVisionAddTaskButton(true);
  };

  return (
    <div className="todo-list">
      <button
        className="add-task-button"
        onClick={handleOnAddNewTaskClick}
        ref={buttonAddNewTask}
      >
        Add New Task
      </button>

      <div className="form-add-todo-display-none" ref={formAddTodo}>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" ref={title} />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <input id="body" type="text" ref={body} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input id="description" type="text" ref={description} />
        </div>
        <button onClick={handleOnConfirmClick}>confirm</button>
      </div>
      <div className="test">
        <div>
          <h1>TO Do</h1>
          {toDos.map((toDo) => {
            if (!toDo.done)
              return (
                <TodoItem
                  id={toDo.id}
                  title={toDo.title}
                  body={toDo.body}
                  key={toDo.id}
                  done={toDo.done}
                  handleDelete={handleDelete}
                  handleStatus={handleStatus}
                />
              );
            return null;
          })}
        </div>

        <div>
          <h1>Done</h1>
          {toDos.map((toDo) => {
            if (toDo.done)
              return (
                <TodoItem
                  id={toDo.id}
                  title={toDo.title}
                  body={toDo.body}
                  key={toDo.id}
                  done={toDo.done}
                  handleDelete={handleDelete}
                  handleStatus={handleStatus}
                />
              );
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
