import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import {Projects} from './components/Projects'
import {Header} from './Header.js'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
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
