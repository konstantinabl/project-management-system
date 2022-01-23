import './App.css';
import { Routes, Route} from "react-router-dom";
import {Projects} from './components/Projects';
import {Header} from './Header.js';
import {ProjectDetailPage} from './components/ProjectDetailPage.js';
import {TaskDetailPage} from './components/TaskDetailPage.js';
import data_json from "./data/data.json";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("data");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });


  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data_json));
  }, [data]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetailPage/>} />
        <Route path="/project/:id/:task_id" element={<TaskDetailPage/>} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <Projects />
    </>
  );
}

export default App;
