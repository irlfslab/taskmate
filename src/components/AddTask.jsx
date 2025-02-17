export const AddTask = ({taskList, setTaskList, task, setTask}) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        if (task.id) {
            const date = new Date();
            const updateTask = taskList.map((todo)) => (
                todo.id === task.id ? {id: task.id, name: e.target.task.value, time: `$(date.toLocaleTimeString()} $(date.toLocaleDateString()}`} : todo
                ));
            setTasklist(updatedTasklist);
        } else {
            const date = new Date();
            const newTask = {
                id: date.getTime(),
                name: e.target.task.value,
                time: `$(date.toLocaleTimeString()} $(date.toLocaleDateString()}`
            }
            setTasklist([...taskList, newTask]);
            e.target.task.value ="";
        }
    return (
        <section className='addTask'>
          <form onSubmit={handleSubmit}>
            <input type="text" name="task" value={task.name ||""} autoComplete="off" placeholder="add task" maxLength="25" onChange={(e) => setTask(...task, name: e.target.value)}/>
            <button type="submit">{ editid ? "Update" : "Add"}</button>
          </form>
        </section>
    )
}
