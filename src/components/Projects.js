import React from "react";
import data from "../data/data.json";
import {Project} from "./Project.js";


export const Projects = () => {
  return (
    <>
      <div className="project-container">
        {data.map((data) => {
          console.log(data)
          return (
            <div key={data.Name}>
              <Project
                name={data.Name}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};