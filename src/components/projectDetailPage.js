import { useState } from 'react';
import { Task } from './Task.js';
import { useParams } from "react-router-dom";

export const ProjectDetailPage = ({data, setData}) => {
    const params = useParams();
    const [keyword, setKeyword] = useState(null);
    const currentProject = data.find(data => data.Name == params.id);
    const filteredTasks = currentProject.Backlog.filter(task => {
        if(!keyword) return task;

        return task.Title.toLowerCase().includes(keyword.toLowerCase()) || task.Description.toLowerCase().includes(keyword.toLowerCase());
    });

    return (
        <div className="container">
            <input type="text" className ="search" placeholder="Search..." value={keyword} onChange={e => setKeyword(e.target.value)}/>
            <table className="project-detail-table">
            <thead>
                <tr>
                    <th>Task Name</th>
                    <th>Task Status</th>
                </tr>
            </thead>
            <tbody>
            {filteredTasks.map((task) => (
                <Task
                    title={task.Title}
                    status={task.Status}
                    projectName={currentProject.Name}
                    clickable={true}
                />
            ))}
            </tbody>
            </table>
        </div>
    );
};