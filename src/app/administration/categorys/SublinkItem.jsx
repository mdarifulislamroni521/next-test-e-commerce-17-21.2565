"use client";
import React, { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";

const SublinkItem = ({ category }) => {
  const [isEdit, setIsEdit] = useState(false);
  const changeEditMode = () => {
    setIsEdit(!isEdit);
  };

  const deleetCategory = (id) => {
    if (
      window.confirm(
        `do you want to delete this category? remember that if you deleet this category you couldn't retrieve again. Are you agree with that?`
      )
    ) {
    }
  };
  return (
    <div className="flex items-center gap-2 pb-2">
      {/* Link name */}
      <div className="flex-1">
        {isEdit ? (
          <input
            placeholder="Categorys Name"
            value={category.name}
            onChange={() => {}}
            className={`w-full p-2 border border-color-grey-light
focus:outline-none focus:border-color-grey-deep rounded text-sm`}
            type="text"
          />
        ) : (
          <p className="text-black text-sm">{category.name}</p>
        )}
      </div>
      {/* link slug */}
      <div className="flex-1">
        {isEdit ? (
          <input
            placeholder="Unique Slug"
            value={category.slug}
            onChange={() => {}}
            className={`w-full p-2 border border-color-grey-light
focus:outline-none focus:border-color-grey-deep rounded text-sm`}
            type="text"
          />
        ) : (
          <p className="text-black text-sm">{category.slug}</p>
        )}
      </div>
      <div className="flex-1">
        {isEdit ? (
          <select
            multiple
            className={`max-w-[400px] flex gap-1 items-center p-2 border border-color-grey-light
             rounded text-s9 focus:outline-none h-[37px]`}
          >
            <option disabled>Select main Category</option>
            <option value="firstime" key="first">
              Sub category 1
            </option>
            <option value="always" key="always">
              Sub Category 2
            </option>
          </select>
        ) : (
          <p className="text-black text-sm">{category.mainCategory}</p>
        )}
      </div>
      {/* actions */}
      <div className="w-max flex items-center gap-2">
        <button
          onClick={deleetCategory}
          className={`text-red-500 bg-color-grey-light hover:opacity-80 p-2
border border-color-grey-light rounded`}
        >
          <MdOutlineDelete size={20} />
        </button>

        {isEdit ? (
          <button
            onClick={changeEditMode}
            className={`text-color-grey-deep bg-color-grey-light hover:opacity-80 p-2
border border-color-grey-light rounded text-sm`}
          >
            Save
          </button>
        ) : (
          <button
            onClick={changeEditMode}
            className={`text-color-grey-deep bg-color-grey-light hover:opacity-80 p-2
border border-color-grey-light rounded text-sm`}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default SublinkItem;
