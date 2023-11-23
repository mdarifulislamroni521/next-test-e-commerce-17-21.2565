"use client";
import React from "react";
import { MdDelete } from "react-icons/md";

import AdminSidebar from "../subComponents/AdminSidebar";
// temp data
import { users } from "@/app/data";
import Image from "next/image";
import moment from "moment";
const Page = () => {
  return (
    <div className="w-full">
      <div className="container pt-5 pb-10">
        <div className="flex gap-3">
          <AdminSidebar active="customers" />
          <div className="flex-1">
            {/* search bar */}
            <div className="w-full pt-2 pb-2">
              <div className="w-full flex items-center gap-2">
                <input
                  placeholder="Enter username or email..."
                  className={`flex-1 p-2 border border-color-grey-light
            focus:outline-none focus:border-color-grey-deep rounded
            text-sm`}
                  type="text"
                />
                <button
                  className={`bg-color-orange-deep rounded text-sm 
            block p-2 pl-3 pr-3 text-white hover:bg-opacity-80`}
                >
                  Search
                </button>
              </div>
            </div>
            {/* users list */}
            <div className="w-full overflow-x-scroll xsm400:overflow-x-hidden">
              <table id="user-table" className="w-full border-collapse">
                <thead>
                  <tr key="header">
                    <th className="w-11"> Picture</th>
                    <th>userID</th>
                    <th>username</th>
                    <th>email address</th>
                    <th className="w-28">join</th>
                    <th className="w-5">_</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <Image
                            src={user.userPicture}
                            width={40}
                            height={40}
                            style={{
                              width: 25,
                              height: 25,
                              margin: "auto",
                              display: "block",
                            }}
                          />
                        </td>
                        <td>{user.userId}</td>
                        <td>@{user.username}</td>
                        <td>{user.email}</td>
                        <td>{moment(user.created).format("DD MMM YYYY")}</td>
                        <td>
                          <button className="hover:text-color-orange-deep">
                            <MdDelete size={20} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
