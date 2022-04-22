import { FC, ChangeEvent, useState } from "react";
import "./app.css";
import { ITask } from "./interfaces";
import TodoTask from "./components/TodoTask";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleTask = (e: ChangeEvent<HTMLInputElement>): void => {
    e.target.name === "task"
      ? setTask(e.target.value)
      : setDeadline(e.target.value);
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline("");
  };

  const deleteTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <div>
      <div className="app">
        <h3>Task Organizer</h3>
        <input
          type="text"
          placeholder="Enter your task"
          name="task"
          onChange={handleTask}
        />
        <input
          type="text"
          placeholder="Enter your deadline"
          name="deadline"
          onChange={handleTask}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="tasks">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
