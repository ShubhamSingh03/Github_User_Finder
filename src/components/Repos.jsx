import { useState, useEffect } from "react";
import Axios from "axios";
import { VscRepoForked } from "react-icons/vsc";
import { FaRegStar } from "react-icons/fa";

// shows repos list on btnClick
const Repos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  const fetchRepo = async () => {
    const { data } = await Axios.get(repos_url);
    setRepos(data);
  };

  useEffect(() => {
    fetchRepo();
  }, [repos_url]);

  return (
    <>
      {/* repo list section */}
      <section className="mt-12 max-w-screen-lg mx-auto px-4">
        <h1 className="font-bold text-xl lg:pl-32 pb-4 opacity-80 hover:opacity-60">
          Repositries as in: [Alphabatical order]
        </h1>
        {repos.map((repo) => (
          <li key={repo.id} className="list-none lg:px-32">
            <div>
              <div className="p-5 border border-[#d1d5db4d] rounded-xl bg-[#ffffff42] mb-1">
                <div className="justify-between sm:flex">
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-blue-500">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {repo.name}
                      </a>
                    </h3>
                    <p className="text-gray-500 mt-2 pr-2 lg:w-9/12">
                      {repo.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 items-center text-sm flex space-x-8">
                  <div className="opacity-80">{repo.language}</div>
                  <span className="flex items-center text-gray-500">
                    <FaRegStar />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center text-gray-500">
                    <VscRepoForked />
                    {repo.forks_count}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </section>
    </>
  );
};

export default Repos;
