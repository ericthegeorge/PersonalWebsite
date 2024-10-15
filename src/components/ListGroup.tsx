import "bootstrap/dist/css/bootstrap.css";
import { MouseEvent } from "react";
//requires items[] and heading string
interface Props {
  items: string[];
  heading: string;
}
function ListGroup({ items, heading }: Props) {
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
