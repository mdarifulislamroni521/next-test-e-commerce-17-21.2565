import React from "react";
import AdminSidebar from "../subComponents/AdminSidebar";
import MainCategorys from "./MainCategorys";
import SubCategorys from "./SubCategorys";
import SubLinks from "./SubLinks";

const Page = () => {
  return (
    <div className="w-full">
      <div className="container pt-5 pb-10">
        <div className="flex gap-3">
          <AdminSidebar active="categorys" />
          <div className="flex-1">
            {/* main categorys */}
            <div className="w-full">
              <MainCategorys />
              <SubCategorys />
              <SubLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
