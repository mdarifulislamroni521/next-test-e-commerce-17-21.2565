import React from "react";

const subMenus = ({ subdata = [] }) => {
  return (
    <ul className="hidden md:group-hover/dm:flex w-max max-w-lg lg:max-w-3xl p-2 pt-3 pb-4 flex-wrap gap-3 absolute top-0 left-full bg-white text-black shadow animate-fadeup-20">
      {subdata.map((subItem, index) => {
        return (
          <li key={index} className="block p-2 w-max">
            <h5 className="text-s17 pb-3 font-bold">{subItem.title}</h5>
            <ul className="flex flex-col gap-2">
              {subItem.categoryItems?.map((subcategoryItem, index1) => {
                return (
                  <li key={index1}>
                    <a
                      className="text-sm hover:text-color-orange-deep hover:underline"
                      href={`/categorys/${subcategoryItem.slug}`}
                    >
                      {subcategoryItem.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default subMenus;
