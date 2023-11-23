"use client";
import React, { useState } from "react";
import Image from "next/image";
const SliderItem = ({ slider }) => {
  const [isEdit, setIsEdit] = useState(false);
  const changeEditMode = () => {
    setIsEdit(!isEdit);
  };
  return (
    <div
      className="w-full bg-white shadow-sm mt-2
overflow-hidden flex items-center p-1 gap-2 border
 border-color-grey-light"
    >
      {/* image */}
      <div className="w-max h-auto">
        <Image
          src={slider.imageUrl}
          width={150}
          height={150}
          style={{
            width: 200,
            height: 200,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      {/* flex right */}
      <div className="pl-3 flex flex-col gap-2 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {isEdit ? (
            <input
              value={slider.shortTitle}
              onChange={() => {}}
              placeholder="Short Title (20 charators)"
              className={`flex-1 p-2 border border-color-grey-light
focus:outline-none focus:border-color-grey-deep rounded text-sm`}
              type="text"
            />
          ) : (
            <p className="text-sm text-black p-1 border border-dashed">
              {slider.shortTitle}
            </p>
          )}
          {isEdit ? (
            <input
              value={slider.buttonLabel}
              onChange={() => {}}
              placeholder="Button Title"
              className={`flex-1 p-2 border border-color-grey-light
focus:outline-none focus:border-color-grey-deep rounded text-sm`}
              type="text"
            />
          ) : (
            <p className="text-sm text-black p-1 border border-dashed">
              {slider.buttonLabel}
            </p>
          )}

          {isEdit ? (
            <input
              value={slider.buttonUrl}
              onChange={() => {}}
              placeholder="Button URL"
              className={`flex-1 p-2 border border-color-grey-light
focus:outline-none focus:border-color-grey-deep rounded text-sm`}
              type="text"
            />
          ) : (
            <p className="text-sm text-black p-1 border border-dashed">
              {slider.buttonUrl}
            </p>
          )}
        </div>

        {isEdit ? (
          <input
            value={slider.title}
            onChange={() => {}}
            placeholder="Title (50 charators)"
            className={`flex-1 p-2 border border-color-grey-light
focus:outline-none focus:border-color-grey-deep rounded text-sm`}
            type="text"
          />
        ) : (
          <p className="text-sm text-black p-1 border border-dashed">
            {slider.title}
          </p>
        )}
        {isEdit ? (
          <textarea
            value={slider.description}
            onChange={() => {}}
            rows={2}
            placeholder="Description (200 charactors)"
            className={`flex-1 p-2 border border-color-grey-light
focus:outline-none focus:border-color-grey-deep rounded text-sm`}
            type="text"
          />
        ) : (
          <p className="text-sm text-black p-1 border border-dashed">
            {slider.description}
          </p>
        )}
        <div className="w-full flex items-center gap-2">
          {isEdit ? (
            <button
              onClick={changeEditMode}
              className="text-sm p-1 pl-2 pr-2 bg-color-secondary 
text-white hover:bg-opacity-80 rounded"
            >
              Save Chnages
            </button>
          ) : (
            <button
              onClick={changeEditMode}
              className="text-sm p-1 pl-2 pr-2 bg-color-secondary 
text-white hover:bg-opacity-80 rounded"
            >
              Edit
            </button>
          )}
          <button
            className="text-sm p-1 pl-2 pr-2 bg-red-500 
text-white hover:bg-opacity-80 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
