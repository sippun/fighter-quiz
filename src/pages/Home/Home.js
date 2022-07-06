import { Link } from "react-router-dom";
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <br/><br/><br/>
      <div className="home-content">
        <div className="text-wrapper">
          <h1 className="home-text">You wake up one day in a strange world, quickly finding out you must fight to survive.</h1>
          <h2 className="home-text">This system will administer a test to determine your greatest potential.</h2>
          <h2 className="home-text">What kind of fighter will you become?</h2>
        </div>
        <Link to="/quiz" className="button-link">Take the quiz</Link>
      </div>
    </div>
  );
}
