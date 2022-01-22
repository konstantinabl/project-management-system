import './App.css';
import { Routes, Route} from "react-router-dom";
import {Projects} from './components/Projects';
import {Header} from './Header.js';
import {ProjectDetailPage} from './components/projectDetailPage.js'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetailPage/>} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <Header />
      <Projects />
    </>
  );
}

export default App;
