import "./App.css";
import Navbar from "./components/Navbar";
import Quiz from './pages/Quiz/Quiz';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Types from './pages/Types/Types';
import Contact from './pages/Contact';
import DetailPrototype from "./pages/Types/Details/DetailPrototype";

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
            <Route path="types/prototype" element={<DetailPrototype/>} />
            <Route path="contact" element={<Contact/>} />
            {/* routes for github pages */}
            <Route path="/fighter-quiz" element={<Home/>} />

            <Route path="*" element={<Home/>} />
          </Routes>
        </div>
    </>
  );
}


export default App;