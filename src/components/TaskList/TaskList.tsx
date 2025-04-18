import { useEffect, useState } from "react";
import { getAllTasks } from "../../controllers/tasksController";
import TaskRow from "./TaskRow";
import NewTaskRow from "./NewTaskRow";


export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllTasks();
      setTasks(res);
    };
    fetchData();
  }, []);


  return (
    <div className="task-list">
      {tasks.map((task: Task) => {
        return <TaskRow key={task.id} task={task} />;
      })}

      <NewTaskRow />
    </div>
  );
}
