import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getType } from './details';

function DetailPage() {
  const [charInfo, setCharInfo] = useState(null);
  const { type } = useParams();
  const typeObj = getType(type);
  const baseURL = "https://api.jikan.moe/v4/characters/14/full"

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCharInfo(response.data);
    });
  }, []);

  if (!charInfo) return null;

  return (
    <div>
      <h1>{type}</h1>
      <p>{typeObj.description}</p>
      <ul>
        {typeObj.characters.map(({ name }) => (
          <>
          <li>{name}</li>
          <p>{charInfo.data.url}</p>
          </>
        ))}

      </ul>
      
    </div>
  );
}

export default DetailPage;
