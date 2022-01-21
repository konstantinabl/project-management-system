import React from "react";
//import "./App.css";
import data from "../data/data.json";


export const Projects = () => {
  return (
    <>
      <div className="project-container">{data.map((data) => {
          return (
              <div key={data.name}>
                  {data.Name}
                </div>
          )
      })}</div>
    </>
  );
};