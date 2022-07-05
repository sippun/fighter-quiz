import { fptypes } from "../../../utils/personality";

import { Link } from 'react-router-dom';

export default function DetailPrototype() {
  const type = fptypes[0];
  return (
    <div>
      <br/><br/><br/><br/>
      <Link to="/types">Back to all types</Link>
      <br/><br/>
      <p>
        {type}
      </p>
    </div>
  );
}
