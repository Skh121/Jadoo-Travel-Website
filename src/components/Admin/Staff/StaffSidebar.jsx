import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../../assets/images/logo.png';
import { RiDashboardFill } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { IoLogOut } from "react-icons/io5";
import { CgAdd } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { CgDialpad } from "react-icons/cg";

const  StaffSidebar=()=> {
  return (
    <div className="h-screen bg-slate-200 dark:bg-white w-[230px]">
      <div className="flex flex-col gap-3 w-full text-slate-300 h-full justify-between">
        <div className="flex flex-col gap-10 px-4 mt-4">
          <div className="flex items-center justify-center gap-3">
            <div className="sm:block w-32 h-auto ">
              <img src={Logo} alt="Logo" className="w-[100px]" />
            </div>
          </div>
          <div className="flex flex-col gap-16 text-md sm:text-sm lg:text-lg justify-around mt-16">
            <Link to="/" className="flex items-center gap-3">
              <RiDashboardFill className="text-2xl text-orange-500"/>
              <span className="hidden sm:flex text-slate-600 hover:text-slate-400 cursor-pointer font-Roboto">
                Dashboard
              </span>
            </Link>
          </div>
        </div>
        <div className="flex items-center text-md text-slate-600 hover:text-slate-400 sm:text-xs md:text-sm lg:text-lg px-4 mb-20 gap-3">
          <IoLogOut className="text-md text-orange-500"/>
          <span className="hidden font-Roboto sm:flex">Logout</span>
        </div>
      </div>
    </div>
  );
}

export default StaffSidebar;
