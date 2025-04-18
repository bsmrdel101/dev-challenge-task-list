import { getNameFromStatus } from "../../utils/tasks";

interface Props {
  task: Task
}


export default function TaskRow({ task }: Props) {
  return (
    <div className={`task-row task-row--${getNameFromStatus(task.status)}`}>
      <div className="task-row__img">
        <img src={task.icon} alt="Icon" />
      </div>

      <div className="task-row__text">
        <h2>{ task.title }</h2>
        <p>{ task.desc }</p>
      </div>
    </div>
  );
}
