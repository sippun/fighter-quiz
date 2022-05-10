import { Link } from "react-router-dom";
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <br/><br/><br/>
      <div className="home-content">
        <div className="text-wrapper">
          <h1 className="home-text">You wake up one day in a strange world, finding it filled with all kinds of combat styles</h1>
          <h2 className="home-text">To determine the kind of potential you have in this world, this system will administer a test to determine your archetype</h2>
          <h2 className="home-text">What kind of fighter will you become?</h2>
        </div>
        <Link to="/quiz" className="button-link">Take the quiz</Link>
      </div>
    </div>
  );
}
