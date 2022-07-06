import { useParams } from 'react-router-dom';
import { getType } from './details';

function DetailPage() {
  const { type } = useParams();

  return (
    <div>
      <h1>{type}</h1>

      <hr />
    </div>
  );
}

export default DetailPage;
