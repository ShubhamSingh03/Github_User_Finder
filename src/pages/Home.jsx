import { useState, useContext } from "react";
import Axios from "axios";
import UserCard from "../components/UserCard";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import { HiOutlineSearch } from "react-icons/hi";

const Home = () => {
  const context = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
    } catch (eror) {
      toast.error("User not found !", {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  //PUt Anypage behind login
  if (!context.user?.uid) {
    return <Navigate to="/" />;
  }

  return (
    <section>
      <div className="flex items-center justify-center p-2 m-h-screen">
        <div
          className="bg-white items-center justify-between w-full md:w-1/2  flex rounded-full shadow-lg p-2 mb-5 sticky"
          style={{
            top: "5px",
          }}
        >
          <input
            className="font-bold rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Please provide the username to search..."
            onKeyDown={(e) => {
              return e.key === "Enter" ? fetchDetails() : "";
            }}
          />
          <div
            className="bg-gray-600 p-2 hover:bg-rose-700 cursor-pointer mx-2 rounded-full"
            onClick={fetchDetails}
          >
            <HiOutlineSearch className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
      <div className="w-full">{user ? <UserCard user={user} /> : null}</div>
    </section>
  );
};

export default Home;
