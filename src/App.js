import './App.css';
import { Routes, Route} from "react-router-dom";
import {Projects} from './components/Projects';
import {Header} from './Header.js';
import {ProjectDetailPage} from './components/projectDetailPage.js';
import {TaskDetailPage} from './components/TaskDetailPage.js';

function App() {
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
