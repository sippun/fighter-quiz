import { useParams } from 'react-router-dom';
import { getType } from './details';
import CharCard from './CharCard';

function DetailPage() {
  const { type } = useParams();
  const typeObj = getType(type);
  

  return (
    <div>
      <h1>{type}</h1>
      <p>{typeObj.description}</p>
      <ul>
        {typeObj.characters.map(({ name, mal_id }) => (
          <CharCard name={name} id={mal_id} key={mal_id}/>
        ))}

      </ul>
      
    </div>
  );
}

export default DetailPage;
