import './Types.css';
import { Link, Routes, Route } from 'react-router-dom';
import { getDetails } from './details';
import DetailPage from './DetailPage';

export default function Types() {
  const details = getDetails();

  return (
    <div className="types-container">
      <br/><br/><br/><br/>

      <h1>Types</h1>
      <ul className="types-list">
        {details.map(({ name }) => (
          <li key={name}>
            <Link to={name}>{name}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <Routes>
        <Route path="/:type" element={<DetailPage />} />
      </Routes>
    </div>
  );
}
