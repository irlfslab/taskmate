export const ShowTask = ({taskList, setTasklist, task, setTask}) => {
    
    const handleEdit = (id) => {
        const selectedTask  = taskList.find(todo => todo.id === id);
        setTask(selectedTask);
    }

    const handleDelete = (id) => {
        const updatedTasklist  = taskList.filter(todo => todo.id !== id);
        setTasklist(updatedTasklist);
    }
        
    return (
        <section className='showTask'>
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">{tasklist.length}</span>
                </div>
                <button className="clearAll" onClick={() => setTasklist([])}>Clear All</button>
            </div>
            <ul>
                {tasklist.map((todo) => (
                    <li key={todo.id}>
                        <p>
                            <span className="name">{todo.name}</span>
                            <span className="time">{todo.time}</span>
                        </p>                
                        <i className="bi bi-pencil-square" onClick={() => handleEdit(todo.id)}></i>
                        <i className="bi bi-trash" onClick={() => handleDelete(todo.id)}></i>
                    </li>
                 ))  }
            </ul>
        </section>
    )
}

export default ShowTask;
