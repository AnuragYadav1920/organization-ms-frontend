import React, { useEffect, useState } from "react";
import SideDashboard from "../../Components/Dashboard/SideDashboard.jsx";
import { NavLink, Outlet } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
const Account = () => {
  const [admin, isAdmin] = useState(true);
  const [openSideDashboard, setOpenSideDashboard] = useState(false);

  const handleOpenSideBar = () => {
    if (openSideDashboard) {
      setOpenSideDashboard(false);
    }
  };

  useEffect(() => {}, [isAdmin]);
  return (
    <>
      <div className="container" onClick={handleOpenSideBar}>
        <div className="relative">
          <div className="text-md font-thin text-slate-400 my-4 ">
            Dashboard /
          </div>
          {!admin ? (
            <div className="account-bar flex justify-start gap-6 text-center text-nowrap text-slate-400 font-thin ">
              <NavLink
                to="my-profile"
                className="px-4 py-2 rounded-full hover:bg-white hover:text-yellow-600"
              >
                My Profile
              </NavLink>
              <NavLink
                to="my-tasks"
                className="px-4 py-2 rounded-full hover:bg-white hover:text-yellow-600"
              >
                Tasks
              </NavLink>
              <NavLink
                to="my-leaves"
                className="px-4 py-2 rounded-full hover:bg-white hover:text-yellow-600"
              >
                Apply Leave
              </NavLink>
              <NavLink
                to="my-applications"
                className="px-4 py-2 rounded-full hover:bg-white hover:text-yellow-600"
              >
                Track Application
              </NavLink>
            </div>
          ) : (
            <div className="account-bar flex justify-start gap-6 text-center text-nowrap text-slate-400 font-thin">
              <NavLink to="organization-details" className="px-4 py-2 rounded-full hover:bg-white hover:text-yellow-600">
                Organization Details
              </NavLink>
              <NavLink to="employee-registration" className="px-4 py-2 rounded-full hover:bg-white hover:text-yellow-600">
                + New Employee
              </NavLink>
              <NavLink to="project-registration" className="px-4 py-2 rounded-full hover:bg-white hover:text-yellow-600">
                + New Project
              </NavLink>
              <NavLink to="projects" className="px-4 py-2 rounded-full hover:bg-white hover:text-yellow-600">
                Projects
              </NavLink>
              <NavLink to="search" className="px-4 py-2 rounded-full hover:bg-white hover:text-yellow-600">
                Search
              </NavLink>
            </div>
          )}
          <ul className="account-details-menu p-2 backdrop-brightness-90 inline-block">
            <RiMenu3Fill
              className="text-xl text-yellow-600 font-bold  "
              onClick={() => setOpenSideDashboard(!openSideDashboard)}
            />
          </ul>
          {openSideDashboard && (
            <div className="absolute top-20 z-20 ">
              <SideDashboard />
            </div>
          )}
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Account;