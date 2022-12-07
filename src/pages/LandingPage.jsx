import { Link } from "react-router-dom";
// landing page before login
const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row-reverse space-y-16 lg:space-y-0 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 py-4 lg:px-8">
        <div className="lg:w-1/2 lg:flex lg:items-center">
          <div>
            <div className="font-semibold inline-flex px-2 py-1 leading-4 mb-2 text-sm rounded text-emerald-700 bg-emerald-200">
              Github User Finder v.1.0
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
              With Github Finder, it's easy for you to search programmers
            </h1>
            <h2 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600">
              A personal project built with React, Firebase, Tailwind and other
              tools to search users and view their profiles on Github.
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
              <Link
                to="/signup"
                className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-rose-700 bg-rose-700 text-white hover:text-white hover:bg-rose-800 hover:border-rose-800 focus:ring focus:ring-rose-500 focus:ring-opacity-50 active:bg-rose-700 active:border-rose-700"
              >
                <span>Join to search</span>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-50 hi-solid hi-arrow-right inline-block w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:mr-16 lg:flex lg:justify-center lg:items-center">
          <div className="lg:w-96 relative">
            <div className="absolute rounded-full top-0 right-0 w-32 h-32 bg-yellow-200 bg-opacity-50 -mt-12 -mr-12" />
            <div className="absolute rounded-xl bottom-0 left-0 w-32 h-32 bg-rose-200 bg-opacity-50 -mb-10 -ml-10 transform rotate-3" />
            <img
              src="https://cdn.tailkit.com/media/placeholders/photo-MChSQHxGZrQ-800x1000.jpg"
              alt="hero"
              className="relative rounded-lg mx-auto shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
