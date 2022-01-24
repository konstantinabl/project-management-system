import React from "react";
import { useNavigate } from "react-router-dom";

export const Task = ({title, status, projectName, clickable}) => {

    let navigate = useNavigate();

    const handleClick = (title) => {
        navigate(`/project/${projectName}/${title}`)
    }
    return (
      <>
      <tr>
          <td className="task-row"
            onClick={() => handleClick(title) 
              ? clickable
              : undefined}>{title}</td>
          <td>{status}</td>
      </tr>
      </>
    );
  };
  