import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);

  const fetchTodos = async () => {
 
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:4000/api/todos");
      console.log(res.data)
      setTodos(res.data);
    } catch (err) {
      console.error("Error fetching todos:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    try {
      setCreating(true);
      const res = await axios.post("http://localhost:4000/api/todos", { title });
      setTodos((prev) => [res.data, ...prev]);
      setTitle("");
    } catch (err) {
      console.error("Error creating todo:", err);
    } finally {
      setCreating(false);
    }
  };

  const toggleCompleted = async (todo) => {
    try {
      const res = await axios.put(`http://localhost:4000/api/todos/${todo._id}`, {
        completed: !todo.completed,
      });
      setTodos((prev) =>
        prev.map((t) => (t._id === todo._id ? res.data : t))
      );
    } catch (err) {
      console.error("Error toggling todo:", err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/todos/${id}`);
      setTodos((prev) => prev.filter((t) => t._id !== id));
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  return (
    <div className="app">
      <h1>MERN Todo</h1>

      <form className="todo-form" onSubmit={handleCreate}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" disabled={creating}>
          {creating ? "Adding..." : "Add"}
        </button>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : todos.length === 0 ? (
        <p>No todos yet. Add one!</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo._id} className={todo.completed ? "completed" : ""}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleCompleted(todo)}
                />
                <span>{todo.title}</span>
              </label>
              <button onClick={() => deleteTodo(todo._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;