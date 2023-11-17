import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import NavBar from "./components/Navbar.jsx";
import Landing from "./components/Landing.jsx";
import Content from "./components/Content.jsx";
import Prompt from "./components/Prompt.jsx";
import About from "./components/About.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div style={{ paddingTop: "60px" }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/content" element={<Content />} />
            <Route path="/prompt" element={<Prompt />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
