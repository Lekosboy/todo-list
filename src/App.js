import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <div className="container"></div>
      <div className="row"></div>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
