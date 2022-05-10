import { useState } from 'react';
import './About.css';

export default function About() {
  const EITYPE = 'EI', PMTYPE = 'PM', TRTYPE = 'TR', JSTYPE = 'JS';
  const [showEI, setShowEI] = useState(false);
  const [showPM, setShowPM] = useState(false);
  const [showTR, setShowTR] = useState(false);
  const [showJS, setShowJS] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      default: break;
      case EITYPE: setShowEI(!showEI);
      break;
      case PMTYPE: setShowPM(!showPM);
      break;
      case TRTYPE: setShowTR(!showTR);
      break;
      case JSTYPE: setShowJS(!showJS);
      break;
    }
  }

  return (
    <div className="about-container">
      <br/><br/><br/><br/>
        <p>
          The global organization responsible for developing combatants in this world,
          Mr. Big Trainer International, also known as MBTI, has created four scales
          to type fighters as follows:
        </p>

        <div className="desc-container" onClick={() => handleClick(EITYPE)}>
          <h1>Enduring vs. Intensive</h1>
          { showEI ? 
            <div className="desc-content">
              <p>Enduring: outlast, wear down, tire out opponent</p>
              <p>Intensive: decisive strikes, explosiveness</p>
            </div>
          : null }
        </div>
        
        <div className="desc-container" onClick={() => handleClick(PMTYPE)}>
          <h1>Mental vs. Physical</h1>
          { showPM ? 
            <div className="desc-content">
              <p>Mental: outwit, out plan, make reads, and mind game</p>
              <p>Physical: faster, stronger, or other physical advantage</p>
            </div>
          : null }
        </div>
        
        <div className="desc-container" onClick={() => handleClick(TRTYPE)}>
          <h1>Tactical vs. Reflexive</h1>
          { showTR ? 
            <div className="desc-content">
              <p>Tactical: study opponent, plan countermeasures, set traps</p>
              <p>Reflexive: instinctive counters, strategize on the fly</p>
            </div>
          : null }
        </div>
        
        <div className="desc-container" onClick={() => handleClick(JSTYPE)}>
          <h1>Justice vs. Self</h1>
          { showJS ? 
            <div className="desc-content">
              <p>Justice: Reasons for fighting come from belief in principles or protecting others</p>
              <p>Self: Motivated by personal reasons</p>
          </div>
          : null }
        </div>
    </div>
  );
}
