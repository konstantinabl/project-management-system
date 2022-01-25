import React from "react";
import { Link } from "react-router-dom";

export const Projects = ({data}) => {
  return (
    <>
      <div className="project-container">
        {data.map((project) => {
          return (
            <div key={project.Name}>
              <table className="main-page-table">
                <tbody>
                  <tr>
                    <td>
                      <Link to={"/project/" + project.Name}>
                        <h5>{project.Name}</h5>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </>
  );
};