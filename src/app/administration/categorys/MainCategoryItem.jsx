"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
const MainCategoryItem = ({ category }) => {
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
      {/* icon */}
      <div className="w-9 h-9 border overflow-hidden relative">
        <Image
          src={category.icon}
          width={100}
          height={100}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
          className=" w-full h-full top-0 left-0"
          alt=""
        />
        {isEdit && (
          <label
            className={`block w-full h-full cursor-pointer absolute
       top-0 left bg-black bg-opacity-30`}
          >
            <input
              onChange={(e) => setCreateIcon(e.target.files[0])}
              className="hidden"
              accept=".png"
              type="file"
            />
            <div className="w-full h-full flex flex-col justify-center items-center">
              <AiOutlineCloudUpload className="text-white" size={20} />
            </div>
          </label>
        )}
      </div>
      {/* category name */}
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
      {/* category slug */}
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

export default MainCategoryItem;
