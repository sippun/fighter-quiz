import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <br/><br/><br/>
        <h1>You've been reborn in an anime world filled with all kinds of combat styles</h1>
        <h1>To determine what kind of potential you have in this world</h1>
        <h1>The system will administer a test to determine your archetype</h1>
        <p>
          What kind of fighter will you become here?
        </p>
        <Link to="/quiz">Take quiz now</Link>
    </>
  );
}
