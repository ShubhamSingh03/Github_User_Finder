import { useState } from "react";
import { SlUserFollow } from "react-icons/sl";
import Repos from "./Repos";

const UserCard = ({ user }) => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  return (
    <>
      <div className="max-w-3xl mx-auto z-10">
        <div className="flex flex-col">
          <div className="bg-white border border-white shadow-lg  rounded-3xl p-4 m-4">
            <div className="flex-none sm:flex">
              <div className=" relative h-32 w-32 sm:mb-0 mb-3">
                <img
                  src={user.avatar_url}
                  alt="user avatar"
                  className=" w-32 h-32 object-cover rounded-2xl"
                />
              </div>
              <div className="flex-auto sm:ml-5">
                <div className="flex items-center justify-between sm:mt-2">
                  <div className="flex items-center">
                    <div className="flex flex-col">
                      <div className="w-full flex-none text-lg text-gray-800 font-bold leading-none">
                        {user.name}
                      </div>
                      <div className="w-full text-gray-600 my-2 leading-tight tracking-tighter md:w-[26rem] ">
                        <span className="mr-3 ">{user.bio}</span>
                      </div>
                      {user.hireable === true ? (
                        <span className="text-gray-600 text-xs leading-tight tracking-tighter">
                          Available for hire
                        </span>
                      ) : (
                        <span className="text-gray-500 text-xs leading-tight tracking-tighter">
                          Not Available for hire
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex pt-2  text-sm text-gray-500">
                  <div className="flex-1 inline-flex items-center">
                    <SlUserFollow className="h-4 w-4" />
                    <p className="ml-2"> {user.followers} Followers</p>
                  </div>

                  {!user.public_repos == 0 ? (
                    <button
                      className="flex-no-shrink px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 rounded-full transition ease-in duration-300 border-rose-700 bg-rose-700 text-white hover:text-white hover:bg-rose-800 hover:border-rose-800 focus:ring focus:ring-rose-500 focus:ring-opacity-50 active:bg-rose-700 active:border-rose-700"
                      onClick={handleClick}
                    >
                      View {user.public_repos} Repos
                    </button>
                  ) : (
                    <button className="flex-no-shrink px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 rounded-full transition ease-in duration-300 border-rose-700 bg-rose-700 text-white hover:text-white hover:bg-rose-800 hover:border-rose-800 focus:ring focus:ring-rose-500 focus:ring-opacity-50 active:bg-rose-700 active:border-rose-700">
                      No Repos
                    </button>
                  )}
                  <a
                    href={user.html_url}
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <button className="flex-no-shrink px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 rounded-full transition ease-in duration-300 border-rose-700 bg-rose-700 text-white hover:text-white hover:bg-rose-800 hover:border-rose-800 focus:ring focus:ring-rose-500 focus:ring-opacity-50 active:bg-rose-700 active:border-rose-700">
                      View on Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isShown && <Repos repos_url={user.repos_url} />}
    </>
  );
};

export default UserCard;
