import { useParams } from "react-router-dom";

export const TaskDetailPage = () => {
    const params = useParams();
    let data = JSON.parse(localStorage.getItem("data"))
    return (
        <div className="container">
            {data.filter(data => data.Name == params.id).map((data) => {
                const tasks = data.Backlog
                return(
                    tasks.filter(task => task.Title == params.task_id).map((task) => {
                        return(
                            <div className="task">
                                <h3 className="task-title">{task.Title}</h3>
                                <div className="task-details">
                                    <div>Type: {task.Type}</div>
                                    <div>Priority: {task.priority} </div>
                                    <div>Status: {task.Status} </div>
                                    <div>Estimate: {task.Estimate}</div>
                                    <div>Assignee: {task.Assignee}</div>
                                    <div>Created At: {task.CreatedAt}</div>
                                    <div>Description: {task.Description}</div>
                                </div>                      
                            </div>
                        )
                    })
                )
            })}
        </div>
    );
};