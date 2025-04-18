export default function NewTaskRow() {
  const handleNewTask = async () => {

  };


  return (
    <div className="task-row new-task-row">
      <button onClick={handleNewTask}>
        <img src="/images/add.svg" alt="Icon" />
      </button>

      <h2>Add new task</h2>
    </div>
  );
}
