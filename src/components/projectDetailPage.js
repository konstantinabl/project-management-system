import { Task } from './Task.js';
import data from "../data/data.json";
import { useParams, Outlet} from "react-router-dom";

export const ProjectDetailPage = () => {
    const params = useParams();
    return (
        <div className="container">
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
        </div>
    );
  


//   return <Project project={project} />;
};