import './styles/App.css';
import NavBar from './components/Navbar.jsx';
import Landing from './components/Landing.jsx';
import Content from './components/Content.jsx';
import About from './components/About.jsx';

function App() {
  return (
    <div>
      <NavBar />
      <Landing />
      <Content />
      <About />
    </div>
  );
}

export default App;
