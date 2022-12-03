import { useContext } from "react";

import { Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";

import { FaGithub } from "react-icons/fa";

const NavBar = () => {
  const context = useContext(UserContext);
  return (
    <header
      id="page-header"
      className="flex flex-none items-center bg-white py-4"
    >
      <div className="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-10">
        <div>
          {!context.user ? (
            <p className="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-rose-600 hover:text-rose-400">
              <FaGithub />
              <span>Github Profile Search</span>
            </p>
          ) : (
            <p className="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-rose-600 hover:text-rose-400">
              <FaGithub />
              <span>Hello, {context.user?.email}</span>
            </p>
          )}
        </div>
        <div className="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 md:space-x-10">
          <nav className="space-x-4 md:space-x-6">
            <a
              href="https://github.com/ShubhamSingh03/Github_User_Finder"
              target={"_blank"}
              className="font-semibold text-gray-900 hover:text-gray-500"
              rel="noopener noreferrer"
            >
              <span>View Project on Github</span>
            </a>
            <a
              href="https://docs.github.com/en/rest?apiVersion=2022-11-28"
              className="font-semibold text-gray-900 hover:text-gray-500"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <span>Github API</span>
            </a>
          </nav>
          <div className="flex items-center justify-center space-x-2">
            {context.user ? (
              <Link
                to="/"
                onClick={() => {
                  context.setUser(null);
                }}
              >
                <button className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-50 hi-solid hi-login inline-block w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Log Out</span>
                </button>
              </Link>
            ) : (
              <>
                <Link to="/signin">
                  <button className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-50 hi-solid hi-login inline-block w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Log In</span>
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
                    <span>New Account</span>
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
