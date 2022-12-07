import "./App.css";
import { useState } from "react";
import { UserContext } from "./context/UserContext";

//react router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// firebase
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import { initializeApp } from "firebase/app";

// Components
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";

// layouts
import Footer from "./layout/Footer";
import NavBar from "./layout/NavBar";

// firebase init
import firebaseConfig from "./config/firebaseConfig";
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <ToastContainer />
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
