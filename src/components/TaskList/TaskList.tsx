import { useEffect, useState } from "react";
import { getAllTasks } from "../../controllers/tasksController";


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
        return <p key={task.id}>{ task.title }</p>;
      })}
    </div>
  );
}
