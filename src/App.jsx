import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import Connect from './components/Connect';

function App() {
  return (
    <body>
      <Navbar />
      <Header />
      <Projects />
      <About />
      <Connect />
    </body>
  );
}

export default App;
