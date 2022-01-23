import { Task } from '../components/Task.js';
import { useParams } from "react-router-dom";

export const TaskDetailPage = () => {
    const params = useParams();
    let data = JSON.parse(localStorage.getItem("data"))
    return (
        <div className="container">
            {data.filter(data => data.Name == params.id).map((data) => {
                const tasks = data.Backlog
                console.log(tasks)
                return(
                    tasks.filter(task => task.Title == params.task_id).map((task) => {
                        return(
                            <Task
                                title={task.Title}
                                status={task.Status}
                                projectName={data.Name}
                                clickable={false}
                            />
                        )
                    })
                )
            })}
        </div>
    );
};