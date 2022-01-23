import { Task } from './Task.js';
import { useParams } from "react-router-dom";

export const ProjectDetailPage = () => {
    const params = useParams();
    let data = JSON.parse(localStorage.getItem("data"))
    
    return (
        <div className="container">
            <table>
            <thead>
                <tr>
                    <th>Task Name</th>
                    <th>Task Status</th>
                </tr>
            </thead>
            <tbody>
            {data.filter(data => data.Name == params.id).map((data) => {
                const tasks = data.Backlog
                console.log(tasks)
                return(
                    tasks.map((task) => {
                        return(
                            <Task
                                title={task.Title}
                                status={task.Status}
                                projectName={data.Name}
                                clickable={true}
                            />
                        )
                    })
                )
            })}
            </tbody>
            </table>
        </div>
    );
  


//   return <Project project={project} />;
};