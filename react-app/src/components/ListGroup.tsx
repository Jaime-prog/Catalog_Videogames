// import { MouseEvent } from "react";

import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelecItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelecItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>There are no items in the list</p>}
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
              onSelecItem(item);
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
