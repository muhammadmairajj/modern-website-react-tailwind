import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ResponsiveMenu = ({ showMenu }) => {
  console.log("showMenu", showMenu);
  return (
    <>
      <div
        className={`${
          showMenu ? "left-0" : "-left-[100%]"
        } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between
      bg-slate-950 px-8 pt-24 text-white transition-all duration-200 md:hidden
      `}
      >
        <div className="card">
          <div className="flex item-center justify-start gap-3">
            <FaUserCircle size={50} />

            <div>
              <h1>Muhammad Mairaj</h1>
              <h1 className="text-sm text-slate-400">muhammadmairajj@gmail.com</h1>
            </div>
          </div>

          <nav className="mt-12">
            <ul className="space-y-4 text-xl">
              <li>
                <a className="mb-5 inline-block" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="mb-5 inline-block" href="#">
                  Top Stories
                </a>
              </li>
              <li>
                <a className="mb-5 inline-block" href="#">
                  Submit your story
                </a>
              </li>
              <li>
                <a className="mb-5 inline-block" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="footer absolute bottom-0">
            <h1>© 2024 All Rights Reserved</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;
