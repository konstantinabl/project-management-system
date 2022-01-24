import React from "react";
import { useNavigate } from 'react-router-dom';

export const TaskDetails = ({ task, setEditMode }) => {
  return (
    <>
      <div className="task">
        <h3 className="task-title">{task.Title}</h3>
        <div className="task-details">
          <p>Type: {task.Type}</p>
          <p>Priority: {task.Priority} </p>
          <p>Status: {task.Status} </p>
          <p>Estimate: {task.Estimate}</p>
          <p>Assignee: {task.Assignee}</p>
          <p>Created At: {task.CreatedAt}</p>
          <p>Description: {task.Description}</p>
          <button type="button" onClick={()=> setEditMode(true)}>Edit</button>
        </div>
      </div>
    </>
  );
};