import { useParams } from 'react-router-dom';
import { getType } from './details';

function DetailPage() {
  const { type } = useParams();
  const typeObj = getType(type);

  return (
    <div>
      <h1>{type}</h1>
      <p>{typeObj.description}</p>
      <hr />
    </div>
  );
}

export default DetailPage;
