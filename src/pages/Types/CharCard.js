import axios from 'axios';
import { useEffect, useState } from 'react';

function CharCard({name, id}) {
  const [charInfo, setCharInfo] = useState(null);
  const baseURL = "https://api.jikan.moe/v4/characters/";

  useEffect(() => {
    axios.get(baseURL + id + "/full").then((response) => {
      setCharInfo(response.data);
    });
  }, [id]);

  if (!charInfo) return null;

  return (
    <>
      <li>{name}</li>
      <img src={charInfo.data.images.jpg.image_url} alt={name + " image"}></img>
      <p>{charInfo.data.url}</p>
    </>
  );
}

export default CharCard;
