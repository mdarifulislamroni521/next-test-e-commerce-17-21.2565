"use client";
import React, { useEffect, useState } from "react";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Pagination = ({ data = {}, updatePage = () => {} }) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const currentPage = data?.currentPage ? data.currentPage : 1;
    const totalPage = data?.totalPages ? data.totalPages : 1;

    const genaratedPages = [];

    if (currentPage > 1 && currentPage < 7) {
      for (let i = 1; i < currentPage; i++) {
        genaratedPages.push(i);
      }
    } else if (currentPage > 1 && currentPage > 6) {
      for (let i = 1; i < 3; i++) {
        genaratedPages.push(i);
      }
      genaratedPages.push("...");
      genaratedPages.push(currentPage - 1);
    } else {
      genaratedPages.push(1);
    }

    // right sides
    if (currentPage + 4 <= totalPage) {
      for (let i = currentPage; i < currentPage + 4; i++) {
        genaratedPages.push(i);
      }
      if (totalPage - (currentPage + 4) > 3) {
        genaratedPages.push("...");
        for (let i = totalPage - 2; i < totalPage + 1; i++) {
          genaratedPages.push(i);
        }
      } else {
        for (let i = currentPage + 4; i < totalPage + 1; i++) {
          genaratedPages.push(i);
        }
      }
    } else if (currentPage < totalPage) {
      for (let i = currentPage; i < totalPage + 1; i++) {
        genaratedPages.push(i);
      }
    }
    setPages(genaratedPages);
  }, []);
  return (
    <div className="w-full p-5 pt-8 pb-8 flex justify-center">
      <div className="flex flex-wrap items-center gap-2">
        <button className="pagination-btn-prev-nxt ">
          <AiOutlineArrowLeft size={25} />
        </button>
        {pages?.map((item, index) => {
          return (
            <button
              onClick={() => {
                if (
                  !isNaN(Number(item)) &&
                  item !== data.currentPage &&
                  pages.length > 1
                ) {
                  updatePage(item);
                }
              }}
              className={`pagination-btn ${
                item === "..."
                  ? "bg-transparent shadow-none -ml-3 -mr-3 hover:text-black cursor-default"
                  : `border-2 border-transparent ${
                      data?.currentPage === item || pages.length === 1
                        ? "bg-color-orange-deep text-white hover:text-white cursor-default"
                        : "bg-color-grey-deep-light hover:border-color-orange-deep"
                    } shadow`
              }`}
              key={index}
            >
              {item}
            </button>
          );
        })}
        <button className="pagination-btn-prev-nxt ">
          <AiOutlineArrowRight size={25} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
