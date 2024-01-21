import "./Todos.css";

export function Todos({ todos, fetchTodos }) {
  const markAsDone = async (_id) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/todo/${_id}/completed`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id }),
    });

    if (response.ok) {
      fetchTodos();
    } else {
      console.error("Failed to mark todo as done");
    }
  };

  const deleteTodo = async (_id) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/todo/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id }),
    });

    if (response.ok) {
      fetchTodos();
    } else {
      console.error("Failed to delete todo");
    }
  };

  console.log(todos);

  return (
    <div className="todos">
      {todos.map((todo) => (
        <div key={todo._id} className="todo">
          <h1 className={todo.completed ? "completed" : ""}>{todo.title}</h1>
          <h2 className={todo.completed ? "completed" : ""}>
            {todo.description}
          </h2>
          <button onClick={() => markAsDone(todo._id)}>
            {todo.completed ? "Done!" : "Mark as done"}
          </button>
          <button
            onClick={() => deleteTodo(todo._id)}
            style={{
              margin: 5,
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
