import React from "react";

const Submenu = ({
  hover = true,
  isActive = false,
  isRight = false,
  elements = [],
  className = "",
}) => {
  return (
    <div
      className={`hidden ${
        hover
          ? className?.trim().length > 0
            ? className
            : "group-hover:block"
          : isActive
          ? "block"
          : ""
      } animate-fadeup-20 absolute ${
        isRight ? "top-0 left-full" : "top-[61px] left-0"
      } w-max bg-color-primary shadow z-10`}
    >
      <ul className="flex flex-col gap-1 relative">
        {elements.map((element, index) => {
          return (
            <li key={index} className="block relative">
              {element}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Submenu;
