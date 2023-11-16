import './styles/App.css';
import NavBar from './components/Navbar.jsx';
import Landing from './components/Landing.jsx';
import Content from './components/Content.jsx';
import Prompt from './components/Prompt.jsx';
import About from './components/About.jsx';
import Login from './components/Login.jsx';
import Profile from './components/Profile.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <NavBar />
      <Landing />
      <Content />
      <Prompt />
      <About />
      <Login />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
