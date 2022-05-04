import "./App.css";
import Navbar from "./components/Navbar";
import Quiz from './components/pages/Quiz';
import { Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Types from './components/pages/Types';

function App() {
  return (
    <>
        <Navbar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="quiz" element={<Quiz/>} />
            <Route path="about" element={<About/>} />
						<Route path="types" element={<Types/>} />
          </Routes>
        </div>
    </>
  );
}


export default App;