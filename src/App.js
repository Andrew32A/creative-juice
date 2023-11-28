import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import NavBar from "./components/Navbar.jsx";
import Landing from "./components/Landing.jsx";
import Prompt from "./components/Prompt.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import Footer from "./components/Footer.jsx";
import Signup from "./components/Signup.jsx";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/prompt" element={<Prompt />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
