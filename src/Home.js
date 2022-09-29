import { useState } from "react";
import ToDoList from "./ToDoList";


const Home = () => {

    const [toDos, setToDo] = useState([
        {title: 'Study React' , body: 'Lorem Ipsum...' , description: 'Lorem Ipsum...' , id: 1},
        {title: 'Test React' , body: 'Lorem Ipsum...' , description: 'Lorem Ipsum...' , id: 2},
        {title: 'Play Games' , body: 'Lorem Ipsum...' , description: 'Lorem Ipsum...' , id: 3}
    ])

    return ( 
        <div className="home">
            <ToDoList toDos={toDos}/>
        </div>
     );
}
 
export default Home;