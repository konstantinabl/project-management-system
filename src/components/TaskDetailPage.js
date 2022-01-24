import { useParams, useNavigate } from "react-router-dom";
import { TaskForm } from "./TaskForm.js"
import { TaskDetails } from "./TaskDetails.js";
import { useState } from "react";

export const TaskDetailPage = ({data, setData}) => {
    const params = useParams();
    const [editMode, setEditMode] = useState(false)
    return (
        <div className="container">
            {data.filter(data => data.Name == params.id).map((project) => {
                const tasks = project.Backlog
                return(
                    tasks.filter(task => task.Title == params.task_id).map((task) => {
                        return(
                            <div>
                                {
                                editMode
                                ? <TaskForm task={task} setEditMode={setEditMode} data={data} setData={setData}/>
                                : <TaskDetails task={task} setEditMode={setEditMode}/>
                                }
                            </div>
                        )
                    })
                )
            })}
        </div>
    );
};