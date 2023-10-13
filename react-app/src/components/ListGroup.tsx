import {MouseEvent} from 'react'

function ListGroup() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia"];

    // Event handler
  const handleClick = (event: MouseEvent) => console.log(event)
  //   const getMessage = () => {
  //     items.length === 0 ? <p>There are no items in the list</p> : null;
  //   };
  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>There are no items in the list</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
