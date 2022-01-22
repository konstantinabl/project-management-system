import React from "react";
import data from "../data/data.json";
import { useNavigate } from "react-router-dom";

export const Projects = () => {
  let navigate = useNavigate();

  const handleClick = (name) => {
    navigate(`/project/${name}`)
  }
  return (
    <>
      <div className="project-container">
        {data.map((data) => {
          return (
            <div key={data.Name}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h5 onClick={()=> {
                        handleClick(data.Name)
                      }} >{data.Name}</h5>
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