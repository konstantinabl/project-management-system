import React from "react";
import { useNavigate } from "react-router-dom";

export const Task = ({title, status, projectName, clickable}) => {

    let navigate = useNavigate();

    const handleClick = (title) => {
        navigate(`/project/${projectName}/${title}`)
    }
    return (
      <>
       <div className="task">
            <table>
                <tbody>
                    <tr>
                        <td onClick={() => handleClick(title) 
                            ? clickable
                            : undefined}>{title}</td>
                        <td>{status}</td>
                    </tr>
                </tbody>
              </table>
        </div>
      </>
    );
  };
  