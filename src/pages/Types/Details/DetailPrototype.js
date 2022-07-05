import { fptypes } from "../../../utils/personality";

export default function DetailPrototype() {
  const type = fptypes[0];
  return (
    <div>
      <br/><br/><br/><br/><br/>
      <p>
        {type}
      </p>
    </div>
  );
}
