import './App.css';
import { Routes, Route} from "react-router-dom";
import {Projects} from './components/Projects';
import {Header} from './Header.js';
import {ProjectDetailPage} from './components/ProjectDetailPage.js';
import {TaskDetailPage} from './components/TaskDetailPage.js';
import data_json from "./data/data.json";
import { useLocalStorage } from "./hooks/useLocalStorage.js";

function App() {
  const [data, setData] = useLocalStorage("data", data_json)

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
