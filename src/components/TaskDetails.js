import React from "react";
import { useNavigate } from 'react-router-dom';

export const TaskDetails = ({ task, setEditMode }) => {
  return (
    <>
      <div className="task">
        <h3 className="task-title">{task.Title}</h3>
        <div className="task-details">
          <div>Type: {task.Type}</div>
          <div>Priority: {task.Priority} </div>
          <div>Status: {task.Status} </div>
          <div>Estimate: {task.Estimate}</div>
          <div>Assignee: {task.Assignee}</div>
          <div>Created At: {task.CreatedAt}</div>
          <div>Description: {task.Description}</div>
        </div>
        <button type="button" onClick={()=> setEditMode(true)}>Edit</button>
      </div>
    </>
  );
};