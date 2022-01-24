import React from "react";
import { useNavigate, useParams } from 'react-router-dom';

export const TaskDetails = ({ task, setEditMode }) => {
  const navigate = useNavigate();
  const params = useParams();
  const handleClick = () => {
    navigate(`/project/${params.id}`);
  }
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
      <button className="back-button" type="button" onClick={handleClick}>Back</button>
    </>
  );
};