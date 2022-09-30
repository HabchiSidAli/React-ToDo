import { useState } from "react";
import ToDoList from "../components/ToDoList";

const Home = () => {
  const [toDos, setToDo] = useState([
    {
      title: "Study React",
      body: "Lorem Ipsum...",
      description: "Lorem Ipsum...",
      id: 1,
    },
    {
      title: "Test React",
      body: "Lorem Ipsum...",
      description: "Lorem Ipsum...",
      id: 2,
    },
    {
      title: "Play Games",
      body: "Lorem Ipsum...",
      description: "Lorem Ipsum...",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newToDos = toDos.filter((toDo) => toDo.id !== id);
    setToDo(newToDos);
  };

  return (
    <div className="home">
      <ToDoList toDos={toDos} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
