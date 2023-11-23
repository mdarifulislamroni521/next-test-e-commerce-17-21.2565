import React from "react";

const Dropdown = ({
  data = [],
  callback = (selectedId) => {},
  isFocused = false,
}) => {
  return (
    <div
      className={`absolute w-auto ${
        isFocused ? "" : "hidden"
      } gap-2 top-6 left-0 bg-color-primary border rounded  p-1 z-10 w-max `}
    >
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-1 rounded hover:bg-color-grey-light p-1 pl-3 pr-3 cursor-pointer"
          onClick={() => callback(item.id)}
        >
          {item.element}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
