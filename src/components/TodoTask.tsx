import { ITask } from "./../interfaces";
import "./todoTask.css";

interface Props {
  task: ITask;
  deleteTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, deleteTask }: Props) => {
  return (
    <div className="todo-main">
      <div className="todo-task">{task.taskName}</div>
      <div className="todo-deadline">{task.deadline}</div>
      <div
        className="todo-delete"
        onClick={() => {
          deleteTask(task.taskName);
        }}
      >
        x
      </div>
    </div>
  );
};

export default TodoTask;
