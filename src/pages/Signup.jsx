import firebase from "firebase/compat/app";
import { UserContext } from "../context/UserContext";
import { Navigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const context = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // firebase auth
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        context.setUser({ email: res.user.email, uid: res.user.uid });
        toast.success("Account Created Successfully !", {
          position: "top-right",
          autoClose: 1200,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use": {
            toast.error("Email already registered !", {
              position: "top-right",
              autoClose: 1200,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            break;
          }

          case "auth/invalid-email": {
            toast.error("Invalid Email !", {
              position: "top-right",
              autoClose: 1200,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            break;
          }

          case "auth/weak-password": {
            toast.error("Password should be atleast 6 characters long !", {
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
          default:
            break;
        }
      });
  };

  // onClick of SignUp btn
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
  };

  if (context.user?.uid) {
    return <Navigate to="/home" />;
  }
  return (
    <>
      <div className="flex w-full max-w-sm mx-auto pt-2 overflow-hidden bg-white rounded-xl shadow-xl lg:max-w-4xl">
        <div
          className="hidden bg-cover bg-center rounded-tl-xl lg:block lg:w-1/2"
          style={{
            backgroundImage:
              " url('https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')",
          }}
        ></div>

        <div className="w-full px-6 py-6 md:px-8 lg:w-1/2">
          <p className="text-xl text-center text-gray-600 dark:text-gray-200">
            Sign up here to find your fellow programmers.
          </p>

          <div>
            <a
              className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
              rel="noopener noreferrer"
              onClick={() => {
                toast.info("Feature not available!", {
                  position: "top-right",
                  autoClose: 1200,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                });
              }}
            >
              <div className="pl-4 py-2">
                <FcGoogle size={"1.5rem"} />
              </div>
              <span className="w-5/6 pr-8 py-3 font-bold text-center">
                Sign up with Google
              </span>
            </a>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

            <p className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
              or signup with email
            </p>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>

          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="LoggingEmailAddress"
            >
              Email Address
            </label>
            <input
              id="LoggingEmailAddress"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="loggingPassword"
              >
                Password
              </label>
            </div>

            <input
              id="loggingPassword"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mt-6">
            <button
              className="w-full px-6 py-3 text-sm font-medium uppercase tracking-wid transition-colors duration-300 transform rounded-lg border-rose-700 bg-rose-700 text-white hover:text-white hover:bg-rose-800 hover:border-rose-800 focus:ring focus:ring-rose-500 focus:ring-opacity-50 active:bg-rose-700 active:border-rose-700"
              onClick={handleSubmit}
            >
              Create Account
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/8"></span>

            <Link
              to="/signin"
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              have an account{" "}
              <p className="text-blue-500 inline-block uppercase">Login here</p>
            </Link>

            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
