import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
}
function ListGroup({ items, heading }: Props) {
  //hook allows to tap into builtin features of react
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0] variable (selected index)
  // arr[1] updater function
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
